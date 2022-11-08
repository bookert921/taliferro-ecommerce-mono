import { firestore, EventContext, logger } from "firebase-functions";
import { QueryDocumentSnapshot } from "firebase-functions/v1/firestore";
// import { IShoppingCart } from "../../../../shared/models/shopping-cart.model";

/**
 * Responds to the event a shopping cart is created and the submit button has been pressed. If
 * status == "Submitted" and all checks pass, the payment will be processed, an order will be
 * created, and the cart will be removed.
 *
 * @param {QueryDocumentSnapshot} snap Received shopping cart.
 * @param {EventContext} context Context of cart.
 */
function handleShoppingCartSubmitted(
  snap: QueryDocumentSnapshot,
  context: EventContext,
) {
  if (snap.get("status") === "Submitted") {
    // const shoppingCart = snap.data() as IShoppingCart;
    const cartId = context.params.cartId;
    logger.log("New cart submitted: " + cartId);
  }
}

export const onCartCreate = firestore
  .document("/carts/{cartId}")
  .onCreate(handleShoppingCartSubmitted);
