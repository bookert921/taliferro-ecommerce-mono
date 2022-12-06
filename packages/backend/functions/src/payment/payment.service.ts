import { IContact } from "@shared/models/contact.model";
import { firestore, EventContext, logger } from "firebase-functions";
import { QueryDocumentSnapshot } from "firebase-functions/v1/firestore";
import { store } from "../repository";
import Stripe from "stripe";
import { IShoppingCart } from "../../../../shared/models/shopping-cart.model";
import { getCompanyStripeKey } from "./payment.helper";
import { firestore as fireS } from "firebase-admin";
import { formatAmountForStripe } from "./utils/format.utils";

/**
 * Responds to the event a shopping cart is created and the submit button has been pressed. If
 * status == "Submitted" and all checks pass, the payment will be processed, an order will be
 * created, and the cart will be removed.
 *
 * @param {QueryDocumentSnapshot} snap Received shopping cart.
 * @param {EventContext} context Context of cart.
 */
async function handleShoppingCartSubmitted(
  snap: QueryDocumentSnapshot,
  context: EventContext,
) {
  let paymentResponse;
  const cart = snap.data() as IShoppingCart;
  const companyId = cart?.companyId ? cart.companyId : "";
  const user = cart?.contact ? cart.contact : {};
  const userId = user && user?._id ? user._id : "";
  const cartId = context.params.cartId;
  logger.log("New cart submitted: " + cartId);
  if (cart?.status === "Submitted") {
    try {
      const stripeKey = await getCompanyStripeKey(companyId);

      if (stripeKey) {
        const stripe = new Stripe(stripeKey, {
          apiVersion: "2022-08-01",
        });
        logger.info("Stripe instance created!");

        const contactRef = store.collection("contacts").doc(userId);
        const contact = (await contactRef.get()).data() as IContact;
        const paymentDetails = user.paymentDetails?.[0];

        let stripePDID = paymentDetails?.stripePDID;
        logger.log(`Found stripe payment method for customer: ${stripePDID}`);

        if (!stripePDID) {
          logger.log(`Creating stripe payment method for customer: ${userId}`);
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
          const stripePaymentDetails = await stripe.paymentMethods.create({
            card: data,
            type: "card",
          });
          stripePDID = stripePaymentDetails.id;
          await contactRef.update({
            paymentDetails: fireS.FieldValue.arrayRemove(paymentDetails),
          });
          const newPaymentDetails = {
            ...paymentDetails,
            stripePDID: stripePaymentDetails.id,
          };
          await contactRef.update({
            paymentDetails: fireS.FieldValue.arrayUnion(newPaymentDetails),
          });
          logger.info("New stripe payment details created: " + stripePDID);
        }

        let stripeCID = contact?.stripeCID;
        logger.log(`Found stripe payment for customer: ${stripeCID}`);

        if (!stripeCID) {
          const contactFirst = contact?.firstName ? contact.firstName : "";
          const contactLast = contact?.lastName ? contact.lastName : "";
          const contactEmail =
            contact?.emails && contact?.emails.length > 0
              ? contact.emails[0].emailAddress
              : "";
          logger.log(`Creating stripe user for email: ${contactEmail}`);
          const stripeCustomer = await stripe.customers.create({
            name: contactFirst + " " + contactLast,
            email: contactEmail,
            payment_method: stripePDID,
          });

          stripeCID = stripeCustomer.id;
          await contactRef.set(
            { stripeCID: stripeCustomer.id },
            { merge: true },
          );
          logger.info("New stripe contact details created: " + stripeCID);
        }

        const currency = cart?.currency ? cart.currency : "USD";
        const amount = cart?.amount
          ? formatAmountForStripe(cart?.amount, currency)
          : 0;
        logger.info("amount being considered: " + amount);

        paymentResponse = await stripe.paymentIntents.create(
          {
            amount,
            currency,
            confirm: true,
            confirmation_method: "automatic",
            customer: stripeCID,
            payment_method: stripePDID,
            receipt_email: cart.emailAddress,
            setup_future_usage: "off_session",
          },
          { idempotencyKey: cartId },
        );

        logger.info(`Payment resolved with status: ${paymentResponse.status}`);

        logger.info("Now creating order receipt");
        const orderRef = store.collection("orders").doc(cartId);

        const order = await orderRef.set(
          {
            status: paymentResponse.status,
            chargeResponse: paymentResponse,
            cart: cart,
            createdAt: Date.now(),
            lastUpdated: Date.now(),
            email: cart.emailAddress,
            companyId,
          },
          { merge: true },
        );

        logger.log(`Order ${cartId} created ${order.writeTime}`);

        await snap.ref.delete();
      }
    } catch (error) {
      if (error instanceof Error) {
        logger.error("Error occurred: ", error.message);
        logger.error(`Order failed for: ${cartId}`);
        await store.doc(`orders/${cartId}`).set({
          status: "Failed",
          chargeResponse: error.message,
          cart,
          createdAt: Date.now(),
          lastUpdated: Date.now(),
          email: cart?.emailAddress,
          companyId,
        });
        await snap.ref.delete();
      }
    }
  }
}

export const onCartCreate = firestore
  .document("/carts/{cartId}")
  .onCreate(handleShoppingCartSubmitted);
