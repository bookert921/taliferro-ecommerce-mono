export interface Invoice  {
  catalog_id: string;
  contact_id: string;
  orderId: string;
  storeId: string;
  status: string;
  date: string;
  ship_date: string;
  shipper: string;
  shipper_tracking_number: string;
  shipping_cost: number;
  shipping_tax: number;
  paid: boolean;
  address: any;
  notes : string;
  lastUpdated: number;
  updatedBy: string;
  createdBy: string;
  createdAt: number;
  browserIp?: string;

  uid: string;
  _id: string;  
}
