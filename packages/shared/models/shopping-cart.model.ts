export class ShoppingCart implements IShoppingCart {
  userType: string = '';
  contactId: string = '';
  billingShipping: boolean = false;
  termsOfService: boolean = false;
  apple_auth: any;
  companyId: string = '';

  shippingRequired: boolean = false;
  emailAddress: string = '';
  amount: any = '';
  tax: number = 0;
  currency: string = '';
  status: string = '';

  lineItems: Array<LineItem> = []
  gateway: string = '';
  fulfillmentStatus: string = '';
  financialStatus: string = '';
  completeOrderUrl: string = '';

  lastUpdated: number = new Date().getTime();
  updatedBy: string = '';
  createdBy: string = '';
  createdAt: number = 0;
  browserIp: string = '';
  environment: string = '';

  discounts: string = '';
  deliveryTime: string = '';

  uid: string = '';
  _id: string = '';
}



export interface IShoppingCart {
  userType?: string;
  contactId?: string;
  contact?: any;
  billingShipping?: boolean;
  termsOfService?: boolean;
  apple_auth?: any;
  companyId?: string;

  shippingRequired?: boolean;
  emailAddress?: string;
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
  product: any,
  quantity: number
}


