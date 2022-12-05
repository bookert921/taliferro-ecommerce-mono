import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CartService } from './cart.service';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { UserService } from './user.service';
import { DataService } from './data.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from 'src/app/shared/data/user.model';
import { SettingService } from './setting.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService implements OnDestroy {

  public errorMessage = new Subject<any>();

  private _dataSubscription?: Subscription;
  private _userRetrieved: boolean = false

  constructor(public cartService: CartService, private _authService: AuthService, private _router: Router, private _userService: UserService, private _dataService: DataService, private _settinsService: SettingService) {

  }

  ngOnDestroy(): void {
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
  }

  private checkShipping(): void {
    if (this.cartService.cart.billingShipping) {
      this.cartService.cart.contact.addresses[1].streetAddress1 = this.cartService.cart.contact.addresses[0].streetAddress1;
      this.cartService.cart.contact.addresses[1].streetAddress2 = this.cartService.cart.contact.addresses[0].streetAddress2;
      this.cartService.cart.contact.addresses[1].city = this.cartService.cart.contact.addresses[0].city;
      this.cartService.cart.contact.addresses[1].province = this.cartService.cart.contact.addresses[0].province;
      this.cartService.cart.contact.addresses[1].zipCode = this.cartService.cart.contact.addresses[0].zipCode;
      this.cartService.cart.contact.addresses[1].country = this.cartService.cart.contact.addresses[0].country;
      this.cartService.cart.contact.addresses[1].firstName = this.cartService.cart.contact.firstName;
      this.cartService.cart.contact.addresses[1].lastName = this.cartService.cart.contact.lastName;
    }
  }


  public async processOrder() {
    if (!environment.production)
      console.log("Contact is", this.cartService.cart.contact);

    // this.checkShipping();

    if (this.cartService.cart)
      this.cartService.cart.completeOrderUrl = environment.localURL + '/pending?id=';

    // let email = (this._authService.firebaseUser) ? (this._authService.firebaseUser.email) : this.cartService.cart.contact.emails[0].emailAddress;
    let email = this.cartService.cart.contact.emails[0].emailAddress;
    await this.saveContact(email);

    if (!environment.production)
      console.log("Using Email for Checkout", email);

    this.tryToAuthenticateOrder(email);
  }

  private tryToAuthenticateOrder(email: string): void {
    if (this._authService.firebaseUser && this._authService.firebaseUser.email) {
      // Already Signed In

      if (!environment.production)
        console.log("Already Logged In", email);

      this.cartService.cart.status = "Submitted";
      this.processAuthenticatedOrder();
      this.proceed();
      this.removeTempCart();
    } else if (this.cartService.cart.apple_auth) {
      // Uses Apple Authentication
      if (!environment.production)
        console.log("Apple Authentication", email);

      this.cartService.cart.status = "Submitted";
      this.appleAuthenticate();
      this.removeTempCart();
    } else if (email.endsWith('gmail.com')) {
      // Using a gmail account
      if (!environment.production)
        console.log("Gmail Authentication", email);

      this.cartService.cart.status = "Submitted";
      this.gmailAuthenticate();
      this.removeTempCart();
    } else {
      if (!environment.production)
        console.log("Passwordless Authentication", email);

      this.normalOrder(email);
      this.reset();
    }

  }

  private async saveContact(emailAddress: string) {
    let contactFromDatabaseID: any = await this.checkIfContactAlreadyThere(emailAddress);
    if (!environment.production)
      console.log(emailAddress, " CONTACT ID RETURNED ", contactFromDatabaseID);


    this.cartService.cart.environment = environment.firebaseConfig.projectId;
    this.cartService.cart.emailAddress = this.cartService.cart.contact.emails[0].emailAddress;
    this.cartService.cart.contact.companyId = this._settinsService.settings._id;
    this.cartService.cart.contact.email = emailAddress;


    if (contactFromDatabaseID != null) {
      this.updateContact(contactFromDatabaseID);
    } else {
      this.addContact();
    }

  }

  private updateContact(contactFromDatabaseID: any): void {
    if (!environment.production)
      console.log("UPDATING", JSON.stringify(this.cartService.cart.contact, null, 2));

    this.cartService.cart.contact._id = contactFromDatabaseID;
    this._dataService.update(environment.CONTACTS, contactFromDatabaseID, this.cartService.cart.contact)
  }

  private addContact(): void {
    if (!environment.production)
      console.log("ADDING", JSON.stringify(this.cartService.cart.contact, null, 2));

    let contactID = this._dataService.addRecordReturnKey(environment.CONTACTS, this.cartService.cart.contact);
    this.cartService.cart.contact._id = contactID;
    this._dataService.update(environment.CONTACTS, contactID, this.cartService.cart.contact)
  }



  private async checkIfContactAlreadyThere(emailAddress: string) {
    if (!environment.production)
      console.log("checkIfContactAlreadyThere", this.cartService.cart.contact.emails[0].emailAddress);
    return new Promise((resolve, reject) => {
      this._dataService.getAllByEmail(environment.CONTACTS, this.cartService.cart.contact.emails[0].emailAddress);
      this._dataService.items?.subscribe((contacts) => {
        if (!environment.production)
          console.log("CONTACTS RETURNED", contacts);
        if (contacts && contacts[0] && contacts[0]._id) {
          resolve(contacts[0]._id);
        } else {
          resolve(null);
        }
      })
    })
  }

  private normalOrder(email: any): void {
    this.cartService.saveTempCart(this._settinsService.settings._id);
    this._authService.signInWithEmailAndCart(email);
    this._router.navigate(['thank-you']);
  }

  private reset(): void {
    setTimeout(() => {
      this.cartService.reset();
    }, 3000);
  }

  private async gmailAuthenticate() {
    let result = await this._authService.signInWithGoogle();
    if (result != null) {
      this.associateUser();
    } else {
      this.errorMessage.next("Unable to authenticate your email address");
      setTimeout(() => {
        this.errorMessage.next(undefined);
      }, 6000);
    }
  }

  private async associateUser() {
    if (this._authService.firebaseUser) {
      this.processAuthenticatedOrder();
      this.proceed();
    } else {
      this._router.navigate(['access']);
    }
  }


  private processAuthenticatedOrder(): void {
    if (!environment.production)
      console.log("FIREBASE USER", this._authService.firebaseUser?.uid, "Processing Authenticated Cart", environment.CARTS, this.cartService.cart);
    this.cartService.cart.uid = this._authService.firebaseUser?.uid;
    this._userService.lastOrderID = this._dataService.addRecordReturnKey(environment.CARTS, this.cartService.cart);

    if (!environment.production)
      console.log("Cart Created", this._userService.lastOrderID, this.cartService.cart);
  }

  removeTempCart(): void {
    if (!environment.production)
      console.log("Trying to remove saved cart", this.cartService.savedCartID);

    if (this.cartService.savedCartID)
      this.cartService.delete(this.cartService.savedCartID);
  }

  private proceed(): void {
    this._router.navigate(['my']);
  }


  private async appleAuthenticate() {
    let result = await this._authService.signInWithApple();
    if (result != null) {
      this.associateUser();
    } else {
      this.errorMessage.next("Unable to authenticate using Apple");
      setTimeout(() => {
        this.errorMessage.next(undefined)
      }, 6000);
    }
  }
}
