import { firestore, EventContext, logger } from "firebase-functions";
import { QueryDocumentSnapshot } from "firebase-functions/v1/firestore";
import { store } from "../repository";

/**
 * @param {QueryDocumentSnapshot} snap
 * @param {context} context
 */
async function handleOrderCreate(
  snap: QueryDocumentSnapshot,
  context: EventContext,
) {
  const orderId = context.params.orderId;
  const order = snap.data();
  if (order.status === "succeeded") {
    logger.info("Deleting cart: " + orderId);
    await store.collection("carts").doc(orderId).delete();
  }
}

export const onOrderCreate = firestore
  .document("orders/{orderId}")
  .onCreate(handleOrderCreate);
