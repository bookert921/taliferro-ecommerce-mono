import { IAddress } from "./address.model";
import { EmailAddress } from "./email-address.model";
import { Phone } from "./phone.model";
import { SocialMedia } from "./social-media.model";
import { Note } from "./note.model";
import { PaymentDetails } from "./payment-details.model";

export class Contact implements IContact {
  _id: string = "";
  displayName: string = "";
  firstName: string = "";
  lastName: string = "";
  userType: string = "";
  companyId: string = "";

  stripeCID: string = "";

  addresses: Array<IAddress> = [];
  emails: Array<EmailAddress> = [];
  phones: Array<Phone> = [];
  socialMedia: Array<SocialMedia> = [];
  notes: Array<Note> = [];
  paymentDetails: Array<PaymentDetails> = [];
}

export interface IContact {
  _id?: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  userType?: string;
  companyId?: string;
  stripeCID?: string;

  addresses?: Array<IAddress>;
  emails?: Array<EmailAddress>;
  phones?: Array<Phone>;
  socialMedia?: Array<SocialMedia>;
  notes?: Array<Note>;
  paymentDetails?: Array<PaymentDetails>;
}
