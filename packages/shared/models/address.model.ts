export class Address implements IAddress {
    firstName: string = '';
    lastName: string = '';
    streetAddress1: string = '';
    streetAddress2: string = '';
    city: string = '';
    province: string = '';
    zipCode: string = '';
    country: string = '';
    county: string = '';
    addressType: string = '';
}

export interface IAddress {
    firstName?: string;
    lastName?: string;
    streetAddress1: string;
    streetAddress2?: string;
    city: string;
    province: string;
    zipCode: string;
    country?: string;
    county?: string;
    addressType?: string;
}