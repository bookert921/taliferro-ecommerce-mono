
export interface Catalog  {
  name: string;
  description: string;
  files : string;
  url: string;
  storeId: string;
  lastUpdated: number;
  updatedBy: string;
  createdBy: string;
  createdAt: number;
  browserIp?: string;

  uid: string;
  _id: string;  
}
