import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { ColorsService } from 'src/app/shared/services/colors.service';
import { UserService } from 'src/app/shared/services/user.service';
import { DataService } from 'src/app/shared/services/data.service';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { environment } from 'src/environments/environment';
import { TestKitOrder } from 'src/app/shared/data/test-kit.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-kit-activation',
  templateUrl: './kit-activation.component.html',
  styleUrls: ['./kit-activation.component.css']
})
export class KitActivationComponent extends DataHandlerComponent implements OnInit, OnDestroy {

  public orderId: any;
  public isSummaryView: boolean = false;
  public orderFound: boolean = false;
  public isAddressEdit: boolean = false;
  public isDobEdit: boolean = false;
  public isGenderEdit: boolean = false;
  public isNameEdit: boolean = false;
  public isPhoneEdit: boolean = false;
  public isOrderEdit: boolean = true;
  public isEmailEdit: boolean = false;
  public isTimeCollectedEdit: boolean = false;
  public isActivated: boolean = false;
  public isKitNumberEdit: boolean = false;
  public allDataEntered: boolean = false;
  public data: any;

  private _dataSubscription?: Subscription;

  public errorMessage: any;

  constructor(protected _dataService: DataService, private _location: Location, public colorService: ColorsService, public userService: UserService) {
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.data = <TestKitOrder>{};
    this.fillLabOrderInfofromUser();
  }

  ngOnDestroy(): void {
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
  }

  back(): void {
    this._location.back();
  }

  onSubmit(): void {
    this.findOrder();
  }

  private async findOrder() {
    const order = await this.getOrder();
    if (order != null) {
      this.data.order = order;
      this.data.orderId = this.orderId;

      if (!environment.production)
        console.log("Order", order);

      this.onKitNumber();
    } else {
      this.errorMessage = "Order " + this.orderId + " Could Not be found";
      this.orderId = '';
      setTimeout(() => {
        this.errorMessage = undefined;
      }, 5000);
    }
  }

  public onLabOrderFound(dataFound: any) {
    this.data = dataFound;

    if (!environment.production)
      console.log("New Data should be", this.data);
  }

  private fillLabOrderInfofromUser(): void {
    if (this.userService.authService.firebaseUser && this.userService.user) {
      this.data.email = (this.userService.user.temp.email) ? this.userService.user.temp.email : '';
      this.data.phone = (this.userService.user.temp.phoneNumber) ? this.userService.user.temp.phoneNumber : '';
      this.data.streetAddress1 = (this.userService.user.temp.streetAddress1) ? this.userService.user.temp.streetAddress1 : '';
      this.data.streetAddress2 = (this.userService.user.temp.streetAddress2) ? this.userService.user.temp.streetAddress2 : '';
      this.data.city = (this.userService.user.temp.city) ? this.userService.user.temp.city : '';
      this.data.province = (this.userService.user.temp.province) ? this.userService.user.temp.province : '';
      this.data.zip = (this.userService.user.temp.zip) ? this.userService.user.temp.zip : '';
      this.data.country = (this.userService.user.temp.country) ? this.userService.user.temp.country : '';
      this.data.firstName = (this.userService.user.temp.firstName) ? this.userService.user.temp.firstName : '';
      this.data.lastName = (this.userService.user.temp.lastName) ? this.userService.user.temp.lastName : '';
      this.data.gender = (this.userService.user.temp.gender) ? this.userService.user.temp.gender : '';
      this.data.dob = (this.userService.user.temp.dob) ? this.userService.user.temp.dob : '';
    }
  }

  private async getOrder() {
    return new Promise((resolve, reject) => {
      this._dataService.get(environment.ORDERS, this.orderId);
      this._dataSubscription = this._dataService.item?.subscribe((order) => {
        if (order && order.cart) {
          resolve(order);
        } else {
          resolve(null);
        }
      })
    })
  }

  onOrderID(): void {
    this.editReset();
    this.isOrderEdit = true;
  }

  private editReset(): void {
    this.isAddressEdit = false;
    this.isDobEdit = false;
    this.isGenderEdit = false;
    this.isNameEdit = false;
    this.isPhoneEdit = false;
    this.isOrderEdit = false;
    this.isSummaryView = false;
    this.isTimeCollectedEdit = false;
    this.isEmailEdit = false;
    this.isActivated = false;
    this.isKitNumberEdit = false;

    this.allDataEntered = this.isComplete();

    if (!environment.production)
      console.log("All Data entered", this.allDataEntered, this.data);
  }

  public onThankYou(): void {
    this.editReset();
    this.data = <TestKitOrder>{};
    this.orderId = '';
    this.isActivated = true;
  }

  public onStartOver(): void {
    this.data = <TestKitOrder>{};
    this.orderId = '';
    this.onOrderID();
  }


  public onTimeCollected(): void {
    this.editReset();
    this.isTimeCollectedEdit = true;
  }

  public onEmail(): void {
    this.editReset();
    this.isEmailEdit = true;
  }

  public onAddress(): void {
    this.editReset();
    this.isAddressEdit = true;
  }

  public onDob(): void {
    this.editReset();
    this.isDobEdit = true;
  }

  public onGender(): void {
    this.editReset();
    this.isGenderEdit = true;
  }

  public onName(): void {
    this.editReset();
    this.isNameEdit = true;
  }

  public onPhone(): void {
    this.editReset();
    this.isPhoneEdit = true;
  }

  public onSummary(): void {
    this.editReset();
    this.isSummaryView = true;
  }

  public onKitNumber(): void {
    this.editReset();
    this.isKitNumberEdit = true;
  }

  public onGoBack(event: any): void {
    switch (event) {
      case 'email':
        this.onEmail();
        break;
      case 'name':
        this.onName();
        break;
      case 'phone':
        this.onPhone();
        break;
      case 'dob':
        this.onDob();
        break;
      case 'orderID':
        this.onOrderID();
        break;
      case 'collection-time':
        this.onTimeCollected();
        break;
      case 'gender':
        this.onGender();
        break;
      case 'address':
        this.onAddress();
        break;
      case 'kit-number':
        this.onKitNumber();
        break;

      default:
        this.onOrderID();
    }
  }


  public isComplete(): boolean {

    if (this.data.firstName
      && this.data.lastName
      && this.data.streetAddress1
      && this.data.city
      && this.data.province
      && this.data.zip
      && this.data.gender
      && this.data.dob
      && this.data.email
      && this.data.phone
      && this.data.timeCollected
      && this.data.dateCollected
    )
      return true;
    else
      return false;
  }
}
