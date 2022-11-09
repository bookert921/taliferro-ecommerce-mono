import { store } from "../repository";
import { logger } from "firebase-functions/v1";

/**
 *
 * @param {string} companyId The company ID attached to the {@link ShoppingCart}.
 * @return {string} stripeKey is returned if added.
 */
export async function getCompanyStripeKey(companyId: string): Promise<string> {
  const companySnap = await store.doc(companyId).get();
  const stripeKey = companySnap.get("epirtsID");
  if (stripeKey == null) {
    logger.error(
      "No associated stripe key found. Please make sure credentials are stored properly.",
    );
    throw new Error("No Stripe account found");
  }
  return stripeKey;
}
