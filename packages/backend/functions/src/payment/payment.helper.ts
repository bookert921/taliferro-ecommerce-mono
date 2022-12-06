import { logger } from "firebase-functions/v1";
import { store } from "../repository";

/**
 * Takes the companyId from user settings and locates the stripe key associated
 * to the company account.
 * @param {string} companyId
 * @return {string} Returns the company stripe key if present.
 */
export async function getCompanyStripeKey(
  companyId: string,
): Promise<string | undefined> {
  try {
    logger.info(`Getting company ${companyId} stripe account.`);
    const companyRef = store.collection("settings").doc(companyId);
    const stripeKey = (await companyRef.get()).get("epirtsID") as string;
    logger.info("Stripe key found!");
    return stripeKey;
  } catch (error) {
    logger.error(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return;
  }
}
