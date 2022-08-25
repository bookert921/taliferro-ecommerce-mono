export interface ShoppingCart {
  userType?: string;
  contact?: any;
  billingShipping?: boolean;
  termsOfService?: boolean;
  apple_auth?: any;
  companyId?: string;

  shippingRequired?: boolean;

  amount?: any;
  tax?: number;
  currency?: string;
  status?: string;

  lineItems?: Array<LineItem>;
  gateway?: string;
  fulfillmentStatus?: string;
  financialStatus?: string;
  completeOrderUrl?: string;

  lastUpdated?: number;
  updatedBy?: string;
  createdBy?: string;
  createdAt?: number;
  browserIp?: string;
  environment?: string;

  discounts?: string;
  deliveryTime?: string;

  uid?: string;
  _id?: string;
}

export interface LineItem {
  product: any;
  quantity: number;
}
