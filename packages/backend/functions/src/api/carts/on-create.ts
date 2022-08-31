import { firestore, logger } from "firebase-functions";
import { store } from "../../repository";
import { ShoppingCart } from "@shared/models";
import { addChargeToAccount } from "@services";
import { formatAmount } from "@utils";
// import { PaymentService } from "@services";

export const onCartCreate = firestore
  .document("/carts/{id}")
  .onCreate(async (snapshot, context) => {
    const cartID: string = context.params.id;
    const cart: ShoppingCart = snapshot.data();

    if (cart.status === "Submitted") {
      try {
        /* Make Payment With Stripe */
        const charge = await addChargeToAccount({
          companyId: cart?.companyId || "",
          amount: formatAmount(cart?.amount),
          ccDetails: cart.contact?.paymentDetails?.[0] || {},
        });
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
            status: charge.status,
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
