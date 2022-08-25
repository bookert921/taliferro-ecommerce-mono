import { Address } from "./address.model";
import { EmailAddress } from "./email-address.model";
import { Phone } from "./phone.model";
import { SocialMedia } from "./social-media.model";
import { Note } from "./note.model";
import { PaymentDetails } from "./payment-details.model";

export interface Contact {
    _id?: string;
    displayName?: string;
    firstName?: string;
    lastName?: string;
    userType?: string;
    companyId?: string;

    addresses?: Array<Address>;
    emails?: Array<EmailAddress>;
    phones?: Array<Phone>;
    socialMedia?: Array<SocialMedia>;
    notes?: Array<Note>;
    paymentDetails?: Array<PaymentDetails>
}