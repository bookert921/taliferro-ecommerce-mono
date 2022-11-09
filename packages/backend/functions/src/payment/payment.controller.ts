import { firestore, EventContext, logger } from "firebase-functions";
import { QueryDocumentSnapshot } from "firebase-functions/v1/firestore";
import { getCompanyStripeKey } from "./payment.service";
import { IShoppingCart } from "../../../../shared/models/shopping-cart.model";
// import { Stripe } from "stripe";

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
  if (snap.get("status") === "Submitted") {
    const shoppingCart = snap.data() as IShoppingCart;
    const cartId = context.params.cartId;
    logger.log("New cart submitted: " + cartId);
    // Get company stripe key
    let stripeKey = "";
    if (shoppingCart.companyId) {
      stripeKey = await getCompanyStripeKey(shoppingCart.companyId);
    }
    logger.log("stripeKey: " + stripeKey);

    // const stripe = new Stripe(stripeKey, { apiVersion: "2022-08-01" });
    // Prepare payment details for Stripe
    // Create stripe customer and payment details
    // Submit payment details to stripe with payment intent and auto confirm (for now)
    // Create order receipt
  }
}

export const onCartCreate = firestore
  .document("/carts/{cartId}")
  .onCreate(handleShoppingCartSubmitted);
