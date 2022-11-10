// https://github.com/firebase/functions-samples/blob/main/stripe/public/javascript/app.js

import { logger } from "firebase-functions/v1";

/**
 * Format amount for Stripe
 * @param {string} amount
 * @param {string} currency
 * @return {number}
 */
export function formatAmountForStripe(
  amount: string,
  currency: string,
): number {
  try {
    const parsedAmount = parseFloat(amount);
    return zeroDecimalCurrency(parsedAmount, currency)
      ? parsedAmount
      : Math.round(parsedAmount * 100);
  } catch (error) {
    logger.log(error);
    return -1;
  }
}

// Check if we have a zero decimal currency
// https://stripe.com/docs/currencies#zero-decimal
/**
 * @param {string} amount
 * @param {string} currency
 * @return {boolean}
 */
function zeroDecimalCurrency(amount: number, currency: string): boolean {
  const numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;
  for (const part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency;
}
