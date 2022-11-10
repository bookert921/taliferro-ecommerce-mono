import { Stripe } from "stripe";
import { store } from "../repository";
import { config, logger } from "firebase-functions/v1";
import { IContact } from "@shared/models/contact.model";
import { IShoppingCart } from "@shared/models/shopping-cart.model";
import { formatAmountForStripe } from "./utils/format.utils";
import { fakeCompany1 } from "../../__TESTS__/tests_data/testCompany.data";
import { firestore } from "firebase-admin";

/**
 *
 */
export class StripeService {
  private stripe: Stripe | undefined;
  private companyStripeKey: string | undefined;
  private company = {
    companyId: "",
  };
  private customer = {
    stripeCId: "",
    stripePId: "",
  };

  /**
   * @param {string} companyId Optionally takes a companyId and bootstraps the
   */
  constructor(companyId?: string) {
    if (companyId) {
      this.company.companyId = companyId;
      this.getCompanyStripeKey(companyId);
      this.createInstance();
    }
  }

  /**
   * Returns a stripe instance for a given company.
   */
  private createInstance() {
    try {
      if (this.companyStripeKey) {
        this.stripe = new Stripe(this.companyStripeKey, {
          apiVersion: "2022-08-01",
        });
        logger.info("Stripe instance created!");
      }
    } catch (error) {
      logger.error(error);
    }
  }

  /**
   * Takes the companyId from user settings and locates the stripe key associated
   * to the company account.
   * @param {string} companyId
   * @return {string} Returns the company stripe key if present.
   */
  async getCompanyStripeKey(companyId: string): Promise<StripeService> {
    if (this.companyStripeKey) return this;
    try {
      logger.info(`Getting company ${companyId} stripe account.`);
      const companyRef = store
        .collection("settings")
        .doc(companyId ? companyId : this.company.companyId);
      let stripeKey = (await companyRef.get()).get("stripeKey") as string;
      if (stripeKey.startsWith(fakeCompany1.stripeKey)) {
        stripeKey = config().stripe.test_key;
      }
      this.companyStripeKey = stripeKey;
      logger.info("Stripe key found!");
    } catch (error) {
      logger.error(error);
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
    return this;
  }

  /**
   * @param {Contact} user
   */
  async addStripeCustomer(user: IContact): Promise<StripeService> {
    try {
      const contactRef = store.collection("contacts").doc(user?._id || "");
      const contact = (await contactRef.get()).data() as IContact;
      if (contact.stripeCID) {
        this.customer.stripeCId = contact.stripeCID;
        return this;
      }
      if (this.stripe) {
        const contactFirst = contact?.firstName ? contact.firstName : "";
        const contactLast = contact?.lastName ? contact.lastName : "";
        const contactEmail =
          contact?.emails && contact?.emails.length > 0
            ? contact.emails[0].emailAddress
            : "";
        logger.log(`Creating stripe user for email: ${contactEmail}`);
        const stripeCustomer = await this.stripe.customers.create({
          name: contactFirst + " " + contactLast,
          email: contactEmail,
          payment_method: this.customer.stripePId,
        });
        this.customer.stripeCId = stripeCustomer.id;
        await contactRef.set({ stripeCID: stripeCustomer.id }, { merge: true });
        logger.info(
          "New stripe contact details created: " + this.customer.stripeCId,
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        logger.error(error.message);
      }
    }
    return this;
  }

  /**
   * @param {Contact} user
   */
  async addStripePaymentMethod(user: IContact): Promise<StripeService> {
    try {
      const contactRef = store.collection("contacts").doc(user?._id || "");
      const contact = (await contactRef.get()).data() as IContact;
      const paymentDetails = contact?.paymentDetails?.[0];
      if (paymentDetails?.stripePDID) {
        this.customer.stripePId = paymentDetails.stripePDID;
        return this;
      }
      if (this.stripe) {
        const data: Stripe.PaymentMethodCreateParams.Card1 = {
          exp_year: paymentDetails?.ccExpDate
            ? parseInt(paymentDetails.ccExpDate.split("-")[0])
            : 0,
          exp_month: paymentDetails?.ccExpDate
            ? parseInt(paymentDetails.ccExpDate.split("-")[1])
            : 0,
          number: paymentDetails?.ccNumber ? paymentDetails.ccNumber : "",
          cvc: paymentDetails?.ccSecurityCode
            ? paymentDetails.ccSecurityCode
            : "",
        };
        logger.log(`Creating stripe payment for customer: ${contact._id}`);
        const stripePaymentDetails = await this.stripe.paymentMethods.create({
          card: data,
          type: "card",
        });
        this.customer.stripePId = stripePaymentDetails.id;
        await contactRef.update({
          paymentDetails: firestore.FieldValue.arrayRemove(paymentDetails),
        });
        const newPaymentDetails = {
          ...paymentDetails,
          stripePDID: stripePaymentDetails.id,
        };
        await contactRef.update({
          paymentDetails: firestore.FieldValue.arrayUnion(newPaymentDetails),
        });
        logger.info(
          "New stripe payment details created: " + this.customer.stripePId,
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        logger.error(error.message);
      }
    }
    return this;
  }

  /**
   * @param {IShoppingCart} cart
   * @return {string}
   */
  async createPayment(cart: IShoppingCart): Promise<string | undefined> {
    try {
      const companyId = cart?.companyId ? cart.companyId : "";
      logger.info("Received companyId: " + companyId);
      const contactId = cart?.uid ? cart.uid : "";
      logger.info("Received contactId: " + contactId);
      const currency = cart?.currency ? cart.currency : "USD";
      const amount = cart?.amount
        ? formatAmountForStripe(cart?.amount, currency)
        : 0;
      logger.info("amount being considered: " + amount);

      const contactRef = store.collection("contacts").doc(contactId);
      const contact = (await contactRef.get()).data() as IContact;

      if (this.stripe === undefined) {
        logger.info("Connecting to stripe with credentials: " + companyId);
        await this.getCompanyStripeKey(companyId);
        this.createInstance();
      }
      if (!this.customer.stripePId) {
        await this.addStripePaymentMethod(contact);
      }
      if (!this.customer.stripeCId) {
        await this.addStripeCustomer(contact);
      }
      let payment;
      if (this.customer.stripeCId && this.customer.stripePId) {
        payment = await this.stripe?.paymentIntents.create(
          {
            amount,
            currency,
            confirm: true,
            confirmation_method: "automatic",
            customer: this.customer?.stripeCId,
            payment_method: this.customer?.stripePId,
          },
          { idempotencyKey: cart._id },
        );
      } else {
        payment = await this.stripe?.paymentIntents.create(
          {
            amount,
            currency,
            confirm: true,
            confirmation_method: "automatic",
          },
          { idempotencyKey: cart._id },
        );
      }

      return payment?.status;
    } catch (error) {
      logger.error(error);
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      return;
    }
  }
}
