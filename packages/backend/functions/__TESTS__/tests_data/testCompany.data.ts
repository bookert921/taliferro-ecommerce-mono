import { generate as shortUuid } from "short-uuid";

const fakeCompany1 = {
  _id: "2pXDjnefwBTBx95mCdN1jU",
  companyName: "Fake Company 1. Inc",
  stripeKey: "sk_test_",
};

const fakeCompany2 = {
  _id: shortUuid(),
  companyName: "Fake Company 2. Inc",
  stripeKey: "sk_test_",
};

export { fakeCompany1, fakeCompany2 };
