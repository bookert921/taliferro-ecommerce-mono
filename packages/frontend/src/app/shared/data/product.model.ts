export interface Product {
  title?: string;
  quantity?: number;
  companyId?: string;
  discontinued?: boolean;
  active?: boolean;
  images?: any;
  files?: any;
  description?: {
    short: string;
    long: string;
  }
  manufacturer?: string;
  author?: string;
  category?: string;
  leadTime?: number;
  productType?: string;
  onSale?: boolean;
  salePrice?: number;
  price?: number;
  calculatedPrice?: number;
  reOrderLevel?: number;
  sku?: string;
  weight?: number;
  height?: number;
  width?: number;
  length?: number;
  unitsOnOrder?: number;
  unitsInStock?: number;
  lastUpdated?: number;
  updatedBy?: string;
  createdBy?: string;
  createdAt?: number;
  browserIp?: string;
  keywords?: string;
  subType?: Array<any>;
  subCategory?: Array<any>;
  dependency?: {
    priceDependent: boolean,
    dependencyCode: string,
    price: number,
    salePrice: number,
    onSale: boolean
  }

  uid?: string;
  _id?: string;
}
