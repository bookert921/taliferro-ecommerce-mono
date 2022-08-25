export interface User {
  _id?: string,
  email?: string;
  photoURL?: string;
  displayName?: string;
  emailVerified?: boolean;
  phoneNumber?: string;
  firstName?: string,
  lastName?: string,
  companyName?: string,
  companyId?: string;
  roles?: any;
  lastUpdated?: any;
  browserIp?: any;
  temp?: any;
}

export interface Roles {
  reader: boolean;
  author?: boolean;
  admin?: boolean;
}

export interface Company {
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


  lastUpdated?: number;
  updatedBy?: string;
  createdBy?: string;
  createdAt?: number;
  browserIp?: string;
  uid?: any;
  _id?: any;
}


