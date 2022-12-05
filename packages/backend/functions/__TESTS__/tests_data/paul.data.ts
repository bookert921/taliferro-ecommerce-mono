import { generate as shortUuid } from "short-uuid";
import { fakeCompany1 } from "./testCompany.data";
import { PaymentDetails } from "../../../../shared/models/payment-details.model";

const paul = {
  _id: shortUuid(),
  firstName: "Paul",
  lastName: "Wade",
  paymentDetails: [
    {
      // _id: shortUuid(),
      ccNameOnCard: "Paul Wade",
      ccNumber: "4242424242424242",
      ccSecurityCode: "123",
      ccExpDate: "2025-04",
    },
  ] as PaymentDetails[],
  emails: [
    {
      _id: shortUuid(),
      emailAddress: "paul+test@taliferro.com",
      emailAddressType: "personal",
    },
  ],
};

const paulShoppingCart = {
  _id: shortUuid(),
  emailAddress: paul.emails[0].emailAddress,
  companyId: fakeCompany1._id,
  status: "Submitted",
  uid: paul._id,
  amount: "100.00",
};

export { paul, paulShoppingCart };
