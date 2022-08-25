import { firestore, logger } from "firebase-functions";
import { store } from "../../repository";
import { ShoppingCart } from "@shared/models";
import {
  connectStripeThroughFirestore,
  processPaymentWithStripe,
} from "@services";

/**
 * 1. Grab Stripe account key (storage location currently firestore)
 * 2. If stripe account available and a cart has been submitted successfully,
 * charge items to card given.
 * 3. Once payment has been received, build order and remove cart.
 */

export const onCartCreate = firestore
  .document("/carts/{id}")
  .onCreate(async (snapshot, context) => {
    const cart: ShoppingCart = snapshot.data();
    const cartID: string = context.params.id;

    if (cart.status === "Submitted") {
      try {
        /* Make Payment With Stripe */
        const { charge, status } = await store
          .collection("settings")
          .get()
          .then(connectStripeThroughFirestore)
          .then((stripe) => processPaymentWithStripe(stripe, cart, cartID));

        /* Update Cart Details */
        logger.info(`Now updating cart: ${cartID}.`);
        await snapshot.ref
          .update({
            "contact.paymentDetails.ccSecurityCode": "",
          })
          .then((writeResult) => {
            logger.info(
              `Cart: ${cartID} has been prepped for order at ${writeResult.writeTime.toDate()}.`,
            );
          });

        /* Create Order From Cart With Payment Info */
        logger.log(`Creating new Order object under: ${cartID}.`);
        await snapshot.ref.get().then(async (doc) => {
          const updatedCart = doc.data();
          if (!updatedCart) throw new Error("Updated cart not found!");
          const data = {
            charge_response: charge,
            cart: updatedCart,
            status: status,
            created_at: doc.updateTime?.nanoseconds,
          };

          return await store
            .collection("orders")
            .doc(cartID)
            .create(data)
            .then((val) => {
              return val.writeTime.toDate();
            });
        });

        /* Remove Current Cart */
        logger.info(`Now deleting cart: ${cartID}...`);
        return await store
          .collection("carts")
          .doc(cartID)
          .delete()
          .then((writeResult) => {
            logger.info(
              `Cart: ${cartID} removed at writeTime: ${writeResult.writeTime.toDate()}.`,
            );
          });
      } catch (err) {
        logger.error(err);
      }
    }
    return null;
  });
