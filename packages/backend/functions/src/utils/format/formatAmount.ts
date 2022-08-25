/**
 * @param {string | number} purchaseAmount Total amount of purchase.
 * @returns {number} Returns amount formatted for Stripe charge.
 * @description Stripe takes a charge.amount value of type number, using the smallest currency unit.
 * @example 100 cents  $1
 */
export function formatAmount(purchaseAmount: string | number): number {
  let amount = purchaseAmount;
  if (typeof amount === "string") {
    return Number(amount.split(".").join(""));
  }

  const CENTS_PER_DOLLAR = 100;
  if (amount.toString().length < 3) {
    amount *= CENTS_PER_DOLLAR;
  }
  console.log(amount);
  return amount;
}
