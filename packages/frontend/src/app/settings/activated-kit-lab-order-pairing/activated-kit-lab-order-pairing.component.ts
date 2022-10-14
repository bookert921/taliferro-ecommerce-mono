import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/services/user.service';
import { DataService } from 'src/app/shared/services/data.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { ShoppingCartComponent } from 'src/app/shared/components/shopping-cart/shopping-cart.component';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { TestKitOrder } from 'src/app/shared/data/test-kit.model';
import { IShoppingCart } from 'src/app/shared/data/shopping-cart.model';
import { ColorsService } from 'src/app/shared/services/colors.service';
@Component({
  selector: 'app-activated-kit-lab-order-pairing',
  templateUrl: './activated-kit-lab-order-pairing.component.html',
  styleUrls: ['./activated-kit-lab-order-pairing.component.css']
})
export class ActivatedKitLabOrderPairingComponent implements OnInit, OnDestroy {
  private _dataSubscription?: Subscription;

  data: any;
  checkOutSection: boolean = true;
  public color = "#000000";
  public background = "#ffffff";

  siteType: string = 'micro';


  @ViewChild(ShoppingCartComponent)
  private _shoppingCartComponent!: ShoppingCartComponent;


  constructor(private _dataService: DataService, public cartService: CartService, public userService: UserService, private _location: Location, public colorService: ColorsService) {

    this._dataService.getAll(environment.SETTINGS);
  }

  ngOnInit(): void {
    this._dataSubscription = this._dataService.items?.subscribe((data) => {
      if (data && data.length && (data.length > 0)) {
        this.data = data[0];
        if (data[0] && data[0].color) {
          this.color = data[0].color;
          this.background = ColorsService.hexToRGB(this.color);
        }

        this.checkOutSection = (this.data.hasOwnProperty("checkoutSection")) ? this.data.checkoutSection : true;
      }
    })
  }

  ngOnDestroy(): void {
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
  }

  back(): void {
    this._location.back()
  }

  totalUp(): void {
    this._shoppingCartComponent.totalUp();
  }

  onView(item: TestKitOrder): void {
    let cart = this.cartService.cart;

    if (!environment.production)
      console.log(item, cart);

    this.moveOverCreditCardInfo(item, cart);
    this.moveOverDetails(item, cart);
    this.movefromCartToCheckOut();
  }

  private movefromCartToCheckOut(): void {
    // this._microCheckOutComponent.refresh();
  }

  private moveOverCreditCardInfo(item: TestKitOrder, cart: IShoppingCart): void {
    // if (item && item.order && item.order.cart && item.order.cart.paymentDetails) {
    //   if (cart.paymentDetails) {
    //     cart.paymentDetails.ccBin = '';
    //     cart.paymentDetails.ccCompany = '';
    //     cart.paymentDetails.ccNameOnCard = (item.order.cart.paymentDetails.ccNameOnCard) ? item.order.cart.paymentDetails.ccNameOnCard : '';
    //     cart.paymentDetails.ccNumber = (item.order.cart.paymentDetails.ccNumber) ? item.order.cart.paymentDetails.ccNumber : '';
    //     cart.paymentDetails.ccExpDate = (item.order.cart.paymentDetails.ccExpDate) ? item.order.cart.paymentDetails.ccExpDate : '';
    //     cart.paymentDetails.ccSecurityCode = (item.order.cart.paymentDetails.ccSecurityCode) ? item.order.cart.paymentDetails.ccSecurityCode : '';

    //     if (!environment.production)
    //       console.log("Moving over -", cart);

    //   }
    // }
  }

  private moveOverDetails(item: TestKitOrder, cart: IShoppingCart): void {
    if (item && item.order && item.order.cart) {
      // cart.companyName = (item.order.cart.companyName) ? item.order.cart.companyName : '';
      // cart.practitionerName = (item.order.cart.practitionerName) ? item.order.cart.practitionerName : '';
      // cart.customerId = (item.order.cart.customerId) ? item.order.cart.customerId : '';
      // cart.npi = (item.order.cart.npi) ? item.order.cart.npi : '';
      // cart.firstName = (item.order.cart.firstName) ? item.order.cart.firstName : '';
      // cart.lastName = (item.order.cart.lastName) ? item.order.cart.lastName : '';


      // cart.email = (item.order.cart.email) ? item.order.cart.email : '';
      // cart.phone = (item.order.cart.phone) ? item.order.cart.phone : '';
      // cart.streetAddress1 = (item.order.cart.streetAddress1) ? item.order.cart.streetAddress1 : '';
      // cart.streetAddress2 = (item.order.cart.streetAddress2) ? item.order.cart.streetAddress2 : '';
      // cart.city = (item.order.cart.city) ? item.order.cart.city : '';
      // cart.province = (item.order.cart.province) ? item.order.cart.province : '';
      // cart.provinceCode = '';
      // cart.zip = (item.order.cart.zip) ? item.order.cart.zip : '';
      // cart.country = (item.order.cart.country) ? item.order.cart.country : '';

      // if (cart.shippingAddress && item.order.cart.shippingAddress) {
      //   cart.shippingAddress.streetAddress1 = (item.order.cart.shippingAddress.streetAddress1) ? item.order.shippingAddress.cart.streetAddress1 : '';
      //   cart.shippingAddress.streetAddress2 = (item.order.cart.shippingAddress.streetAddress2) ? item.order.shippingAddress.cart.streetAddress2 : '';
      //   cart.shippingAddress.city = (item.order.cart.shippingAddress.city) ? item.order.cart.shippingAddress.city : '';
      //   cart.shippingAddress.province = (item.order.cart.shippingAddress.province) ? item.order.cart.shippingAddress.province : '';
      //   cart.shippingAddress.provinceCode = '';
      //   cart.shippingAddress.zip = (item.order.cart.shippingAddress.zip) ? item.order.cart.shippingAddress.zip : '';
      //   cart.shippingAddress.country = (item.order.cart.shippingAddress.country) ? item.order.cart.shippingAddress.country : '';
      // }

    }
  }




}
