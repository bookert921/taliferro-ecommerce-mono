export class Order implements IOrder {
  name: string = '';
  note: string = '';
  companyId?: string = '';
  firstName: string = '';
  lastName: string = '';

  streetAddress1: string = '';
  streetAddress2: string = '';
  city: string = '';
  province: string = '';
  provinceCode: string = '';
  zip: string = '';
  country: string = '';
  shippingRequired: boolean = false;
  shippingAddress: ShippingAddress = new ShippingAddress();

  amount: number = 0;
  tax: number = 0;
  currency: string = '';
  status: string = '';

  lineItems: any = [];
  gateway: string = '';
  fulfillmentStatus: string = '';
  financialStatus: string = '';

  email: string = '';
  phone: string = '';
  lastUpdated: number = new Date().getTime();
  updatedBy: string = '';
  createdBy: string = '';
  createdAt: number = 0;
  browserIp?: string = '';
  environment?: string = '';

  discounts: string = '';

  paymentDetails: PaymentDetails = new PaymentDetails();

  uid: string = '';
  _id: string = '';
  cart: any = undefined;
  user: any = undefined;
  chargeResponse: undefined;

}

export class PaymentDetails {
  ccBin: string = '';
  ccCompany: string = '';
  ccNumber: string = '';
  cvvResultCode: string = '';
}

export class ShippingAddress {
  streetAddress1: string = '';
  streetAddress2: string = '';
  city: string = '';
  province: string = '';
  provinceCode: string = '';
  zip: string = '';
  country: string = '';
}


export interface IOrder {
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
  environment?: string;

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
