import { firestore, EventContext, logger } from "firebase-functions";
import { QueryDocumentSnapshot } from "firebase-functions/v1/firestore";
import { store } from "../repository";
import { IShoppingCart } from "../../../../shared/models/shopping-cart.model";
import { StripeService } from "./stripe.service";

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
    try {
      const shoppingCart = snap.data() as IShoppingCart;
      const cartId = context.params.cartId;
      logger.log("New cart submitted: " + cartId);
      const result = await new StripeService().createPayment(shoppingCart);
      await snap.ref.set(
        {
          ...shoppingCart,
          status: result?.status || "failed",
        },
        { merge: true },
      );
      const ordersRef = store.collection("orders");
      await ordersRef.doc(cartId).create({
        cart: (await snap.ref.get()).data(),
        charge_response: result,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
    } catch (error) {
      logger.error("Error occurred: ", error);
    }
  }
}

export const onCartCreate = firestore
  .document("/carts/{cartId}")
  .onCreate(handleShoppingCartSubmitted);
