export interface Order {
  name: string;
  note: string;
  companyId?: string;
  firstName: string;
  lastName: string;

  streetAddress1: string;
  streetAddress2: string;
  city: string;
  province: string;
  provinceCode: string;
  zip: string;
  country: string;
  shippingRequired: boolean;
  shippingAddress: {
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    province: string;
    provinceCode: string;
    zip: string;
    country: string;
  }

  amount: number;
  tax: number;
  currency: string;
  status: string;

  lineItems: any;
  gateway: string;
  fulfillmentStatus: string;
  financialStatus: string;

  email: string;
  phone: string;
  lastUpdated: number;
  updatedBy: string;
  createdBy: string;
  createdAt: number;
  browserIp?: string;
  environment?:string;

  discounts: string;

  paymentDetails: {
    ccBin: string;
    ccCompany: string;
    ccNumber: string;
    cvvResultCode: string;
  }

  uid: string;
  _id: string;
  cart: any;
  user: any;
  chargeResponse: any;
  
}
