import { store } from "../repository";
import { Stripe } from "stripe";
import { logger } from "firebase-functions/v1";
import { IShoppingCart } from "@shared/models/shopping-cart.model";
import { IContact } from "@shared/models/contact.model";
import { formatAmountForStripe } from "./utils/format.utils";

/**
 *
 * @param {string} companyId The company ID attached to the {@link ShoppingCart}.
 * @return {string} stripeKey is returned if added.
 */
export async function getCompanyStripeKey(companyId: string): Promise<string> {
  const companySnap = await store.collection("settings").doc(companyId).get();
  const stripeKey = companySnap.get("epirtsID");
  if (stripeKey == null) {
    logger.error(
      "No associated stripe key found. Please make sure credentials are stored properly.",
    );
    throw new Error("No Stripe account found");
  }
  return stripeKey;
}

/**
 *
 */
export async function createPayment({
  stripeKey,
  shoppingCart,
}: {
  stripeKey: string;
  shoppingCart: IShoppingCart;
}): Promise<Stripe.Response<Stripe.PaymentIntent> | undefined> {
  const stripe = new Stripe(stripeKey, { apiVersion: "2022-08-01" });
  if (shoppingCart?.amount && shoppingCart?.contact?._id) {
    const contactRef = await store
      .collection("contacts")
      .doc(shoppingCart.contact._id)
      .get();
    const currency = shoppingCart.currency ? shoppingCart.currency : "USD";
    const contact = contactRef.data() as IContact;
    const chargeAmount = formatAmountForStripe(shoppingCart.amount, currency);
    let stripeCustomerID;
    let stripePaymentID;
    if (!shoppingCart?.paymentId) {
      const paymentDetails = contact.paymentDetails?.[0];
      if (
        paymentDetails &&
        paymentDetails.ccExpDate &&
        paymentDetails.ccNumber &&
        paymentDetails.ccSecurityCode
      ) {
        stripePaymentID = await stripe.paymentMethods
          .create({
            card: {
              number: paymentDetails.ccNumber as string,
              exp_month: parseInt(
                paymentDetails.ccExpDate.split("-")[1] || "0",
              ),
              exp_year: parseInt(paymentDetails.ccExpDate.split("-")[0] || "0"),
              cvc: paymentDetails.ccSecurityCode as string,
            },
          })
          .then((response) => response.id);
      }
    } else {
      stripePaymentID = shoppingCart?.paymentId;
    }
    if (!contact?.stripeCID) {
      stripeCustomerID = await stripe.customers
        .create({
          email: contact.emails?.[0]?.emailAddress,
          name: contact.paymentDetails?.[0]?.ccNameOnCard,
        })
        .then((response) => response.id);
      await contactRef.ref.set({ stripeCID: stripeCustomerID });
    } else {
      stripeCustomerID = contact.stripeCID;
    }
    const payment = await stripe.paymentIntents.create({
      confirmation_method: "automatic",
      amount: chargeAmount,
      currency,
      receipt_email: shoppingCart.emailAddress,
      customer: stripeCustomerID,
      confirm: true,
      payment_method: stripePaymentID,
    });
    return payment;
  }
  return undefined;
}
