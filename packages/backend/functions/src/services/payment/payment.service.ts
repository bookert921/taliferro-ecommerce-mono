import { store } from "@repository";
import { PaymentDetails } from "@shared/models";
import { formatExpiration } from "@utils";
import { config, logger } from "firebase-functions/v1";
import * as stripe from "stripe";

const STRIPE_KEY_LOCATION: string =
  process.env.STRIPE_KEY_LOCATION != "undefined"
    ? process.env.STRIPE_KEY_LOCATION
    : config().stipe.key.location;

/**
 * @param {string} companyId
 */
export async function getStripeAccount(companyId: string) {
  try {
    if (STRIPE_KEY_LOCATION == undefined) {
      throw new Error(
        "Requires that a stripe key field be provided with the stripe key value.",
      );
    }
    logger.info(
      `Retrieving stripe key for ${companyId} from company settings...`,
    );
    const companySettings = await store.doc(`settings/${companyId}`).get();
    const stripeKey = companySettings.get(STRIPE_KEY_LOCATION);
    if (!stripeKey) {
      throw new Error("There is no stripe key present in user settings.");
    }
    logger.info("Stripe key has been successfully received...");
    return stripeKey;
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }
    return process.exit(1);
  }
}

/**
 * @param {string} companyId
 */
export async function stripeConnector(companyId: string) {
  try {
    logger.info("Accessing stripe account...");
    const stripeConnection = new stripe.Stripe(
      await getStripeAccount(companyId),
      {
        apiVersion: "2022-08-01",
      },
    );
    logger.info("Stripe has connected successfully");
    return stripeConnection;
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }
    return process.exit(1);
  }
}

/**
 * @param {Object} chargeDetails
 */
export async function addChargeToAccount({
  companyId,
  amount,
  ccDetails,
}: {
  companyId: string;
  amount: number;
  ccDetails: PaymentDetails;
}) {
  logger.info(`Creating charge of amount ${amount}`);
  try {
    const { expMonth, expYear } = formatExpiration(ccDetails?.ccExpDate || "");
    const stripeInstance = await stripeConnector(companyId);
    const cardToken = await stripeInstance.tokens.create({
      card: {
        exp_month: expMonth,
        exp_year: expYear,
        cvc: ccDetails?.ccSecurityCode || "",
        number: ccDetails?.ccNumber || "",
        currency: "usd",
        name: ccDetails?.ccNameOnCard || "",
      },
    });
    const charge = await stripeInstance.charges.create({
      amount: amount,
      source: cardToken.id,
    });
    logger.info(`Charge completed with status: ${charge.status}`);
    return { receipt: charge, status: charge.status };
  } catch (error) {
    let errMsg;
    if (error instanceof Error) {
      errMsg = error.message;
    }
    logger.error({ receipt: null, status: errMsg });
    return { receipt: null, status: errMsg };
  }
}
