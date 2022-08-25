import { expect } from "chai";
import { formatAmount } from "@utils";

describe("Make sure Stripe receives a proper amount", () => {
  it("formats the amount for purchase for stripe correctly", () => {
    expect(formatAmount("8.99")).to.equal(899);
  });
});
