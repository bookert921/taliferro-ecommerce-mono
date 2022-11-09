
export class Catalog implements ICatalog {
  name: string = '';
  description: string = '';
  files: string = '';
  url: string = '';
  storeId: string = '';
  lastUpdated: number = new Date().getTime();
  updatedBy: string = '';
  createdBy: string = '';
  createdAt: number = 0;
  browserIp?: string = '';

  uid: string = '';
  _id: string = '';
}


export interface ICatalog {
  name: string;
  description: string;
  files: string;
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
