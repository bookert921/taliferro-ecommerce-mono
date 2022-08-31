// import { ShoppingCart } from "@shared/models";
// import { formatAmount, formatCardNumber, formatExpiration } from "@utils";
// import * as stripe from "stripe";
// import { firebaseConfig, logger, config } from "firebase-functions";

// const STRIPE_KEY = process.env.STRIPE_KEY_LOCATION!;

// /**
//  * @param {FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>} value Value given from firestore location. Here, settings is used.
//  * @return {Stripe} Returns stripe instance based on firestore location of secret
//  */
// export function connectStripeThroughFirestore(
//   value: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>,
// ) {
//   logger.info(`Accessing payments account: ${STRIPE_KEY}`);
//   let id: string;
//   try {
//     id = value.docs[0].get(STRIPE_KEY);
//   } catch (err) {
//     logger.error(err);
//     id = config().stripe.key;
//   }
//   if (!id) throw new Error("No Stripe ID found to make purchase.");
//   logger.info("Payments account found!");
//   return new stripe.Stripe(id, {
//     apiVersion: "2022-08-01",
//   });
// }

// /**
//  * @param {ShoppingCart} cart
//  * @return {object} Returns arguments needed for Stripe
//  */
// export function formatPaymentDetailsForStripe(cart: ShoppingCart) {
//   if (!cart?.contact?.paymentDetails || !cart?.amount) {
//     const paymentDetails = cart?.contact?.paymentDetails ? "Found" : "Missing";
//     const cartAmount = cart?.amount ? "Found" : "Missing";
//     throw new Error(`payment: ${paymentDetails}; amount: ${cartAmount};`);
//   }
//   return {
//     amount: formatAmount(cart?.amount),
//     card_number: formatCardNumber(cart?.contact.paymentDetails.ccNumber),
//     expiration: formatExpiration(cart?.contact.paymentDetails.ccExpDate),
//     cc_security_code: cart?.contact.paymentDetails.ccSecurityCode,
//     cc_name_on_card: cart?.contact.paymentDetails.ccNameOnCard,
//   };
// }

// /**
//  * @param {Stripe} paymentAccount Stripe instance connected with secret.
//  * @param {ShoppingCart} cart Cart to use in transaction.
//  * @param {string} orderId Cart to use in transaction.
//  * @return {object} Returns a charge object and status from Stripe.
//  */
// export async function processPaymentWithStripe(
//   paymentAccount: stripe.Stripe,
//   cart: ShoppingCart,
//   orderId: string,
// ) {
//   let charge;
//   let status: string;
//   const { amount, card_number, cc_name_on_card, cc_security_code, expiration } =
//     formatPaymentDetailsForStripe(cart);
//   /**
//    * Stripe requires either customerId, tokenId, cardId, or sourceId.
//    * Token is used to set up card to be processed in charge,
//    * without needing to create a Stripe customer.
//    */
//   logger.info("Beginning charge process...");
//   try {
//     const cardToken = await paymentAccount.tokens
//       .create({
//         card: {
//           number: card_number,
//           exp_month:
//             typeof expiration === "object" ? expiration[1] : expiration,
//           exp_year: typeof expiration === "object" ? expiration[0] : expiration,
//           cvc: cc_security_code,
//           name: cc_name_on_card ? cc_name_on_card : "",
//         },
//       })
//       .then((value) => {
//         logger.info("Card Token accepted!");
//         return value;
//       });

//     const projectId = firebaseConfig()?.projectId;
//     charge = await paymentAccount.charges
//       .create({
//         currency: "usd",
//         amount: amount,
//         source: cardToken.id,
//         metadata: {
//           orderId: orderId ? orderId : "",
//           projectId: projectId ? projectId : "",
//         },
//       })
//       .then((value) => {
//         logger.info("Charge has been accepted!");
//         return value;
//       });
//     status = charge.status;
//   } catch (err) {
//     let errorMessage = "Charge process has failed...";
//     if (err instanceof Error) {
//       errorMessage = err.message;
//     }
//     charge = errorMessage;
//     status = "Failed";
//   }

//   return {
//     charge,
//     status,
//   };
// }
