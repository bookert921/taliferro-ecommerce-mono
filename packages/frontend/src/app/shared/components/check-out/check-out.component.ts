import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';

import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { ColorsService } from '../../services/colors.service';
import { Subscription } from 'rxjs';
import { CheckoutService } from '../../services/checkout.service';
import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';
import { Contact } from '../../data/contact.model';
import { Address } from '../../data/address.model';
import { ShoppingCart } from '../../data/shopping-cart.model';
import { Phone } from '../../data/phone.model';
import { EmailAddress } from '../../data/email-address.model';
import { PaymentDetails } from '../../data/payment-details.model';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent extends DataHandlerComponent implements OnInit, OnDestroy {

  data: any;
  @Input() companyData: any;
  public diagnostic: boolean = false;
  public contact: Contact = {
    userType: 'customer',
    addresses: [],
    phones: [],
    emails: [],
    paymentDetails: [],
  };
  public address: Address = {
    streetAddress1: '',
    city: '',
    province: '',
    zipCode: '',
    addressType: 'Home'
  }

  public shippingAddress: Address = {
    firstName: '',
    lastName: '',
    streetAddress1: '',
    city: '',
    province: '',
    zipCode: '',
    addressType: 'Shipping'
  }

  public phone: Phone = {
    countryCode: '',
    phoneNumber: '',
    phoneType: 'Home'
  }

  public emailAddress: EmailAddress = {
    emailAddress: '',
    emailAddressType: 'Personal'
  }

  public paymentDetails: PaymentDetails = {

  }

  public errorMessage: any;

  private _errorSubscription?: Subscription;

  constructor(public productService: ProductService, public authService: AuthService, private _router: Router, protected _dataService: DataService, public cartService: CartService, public colorService: ColorsService, private _checkoutService: CheckoutService, public userService: UserService) {
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.initData();
    this.setAutoFill();
    this._errorSubscription = this._checkoutService.errorMessage.subscribe((message) => {
      this.errorMessage = message;
    });
  }

  ngOnDestroy(): void {

  }

  initData(): void {
    try {
      this.contact.addresses?.push(this.address);
      this.contact.addresses?.push(this.shippingAddress);
      this.contact.emails?.push(this.emailAddress);
      this.contact.paymentDetails?.push(this.paymentDetails);
      this.contact.phones?.push(this.phone);
      this.cartService.cart.contact = this.contact;
      if (this.companyData) {
        this.contact.companyId = this.companyData._id;
        this.cartService.cart.companyId = this.companyData._id;
      }
    } catch (error) {
      console.error("Could not properly initialize", error);
    }

  }

  onSubmit(): void {
    this.cartService.cart.contact = this.contact;
    this._checkoutService.processOrder();
  }

  showContent(): void {
    let ccNumber = document.getElementById("ccNumber")
    let type = ccNumber?.getAttribute('type') === 'password' ? 'text' : 'password';
    ccNumber?.setAttribute('type', type);
  }


  setAutoFill(): void {
    if (this.authService.firebaseUser && this.authService.firebaseUser.email) {
      this._dataService.getAllByEmail(environment.CONTACTS, this.authService.firebaseUser.email);
      this._dataService.items?.subscribe((contacts) => {
        if (contacts[0] && contacts[0]._id && contacts[0].emails[0] && contacts[0].emails[0].emailAddress) {
          this.contact = contacts[0];
          if (this.contact.emails && this.contact.emails[0])
            this.emailAddress = this.contact.emails[0];
          if (this.contact.addresses && this.contact.addresses[0])
            this.address = this.contact.addresses[0];
          if (this.contact.phones && this.contact.phones[0])
            this.phone = this.contact.phones[0];
          if (this.contact.paymentDetails && this.contact.paymentDetails[0]) {
            this.paymentDetails = this.contact.paymentDetails[0];
            this.paymentDetails.ccSecurityCode = '';
          }
            
        }
      })
    }
  }

  setDiagnostic(): void {
    this.diagnostic = !this.diagnostic;
  }



}
