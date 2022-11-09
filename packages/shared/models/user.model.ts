export class User implements IUser {
  _id: string = "";
  email: string = "";
  photoURL: string = "";
  displayName: string = "";
  emailVerified: boolean = false;
  phoneNumber: string = "";
  firstName: string = "";
  lastName: string = "";
  companyName: string = "";
  companyId: string = "";
  roles: any = "";
  lastUpdated: number = new Date().getTime();
  browserIp: string = "";
  temp: any = "";
}

export interface IUser {
  _id?: string;
  email?: string;
  photoURL?: string;
  displayName?: string;
  emailVerified?: boolean;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  companyId?: string;
  roles?: any;
  lastUpdated?: any;
  browserIp?: any;
  temp?: any;
}

export class Roles implements IRoles {
  reader: boolean = true;
  author: boolean = false;
  admin: boolean = false;
}

export interface IRoles {
  reader: boolean;
  author?: boolean;
  admin?: boolean;
}

export class Company implements ICompany {
  companyName: string = "";
  streetAddress1: string = "";
  streetAddress2: string = "";
  city: string = "";
  province: string = "";
  provinceCode: string = "";
  zip: string = "";
  country: string = "";

  ccCompany: string = "";
  ccNameOnCard: string = "";
  ccNumber: string = "";
  ccExpDate: string = "";

  epirtsID: string = "";

  lastUpdated: number = new Date().getTime();
  updatedBy: string = "";
  createdBy: string = "";
  createdAt: number = 0;
  browserIp: string = "";
  uid: any = "";
  _id: any = "";
}

export interface ICompany {
  companyName?: string;
  streetAddress1?: string;
  streetAddress2?: string;
  city?: string;
  province?: string;
  provinceCode?: string;
  zip?: string;
  country?: string;

  ccCompany?: string;
  ccNameOnCard?: string;
  ccNumber?: string;
  ccExpDate?: string;

  epirtsID?: string;

  lastUpdated?: number;
  updatedBy?: string;
  createdBy?: string;
  createdAt?: number;
  browserIp?: string;
  uid?: any;
  _id?: any;
}
