import { Component, OnInit, OnDestroy, Output,  EventEmitter, Input } from '@angular/core';
import { Location } from '@angular/common';

import { DataService } from 'src/app/shared/services/data.service';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';

import { environment } from "../../../environments/environment";
import { ColorsService } from 'src/app/shared/services/colors.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-lab-order-summary',
  templateUrl: './lab-order-summary.component.html',
  styleUrls: ['./lab-order-summary.component.css']
})
export class LabOrderSummaryComponent  extends DataHandlerComponent implements OnInit, OnDestroy {

  @Output() goBack = new EventEmitter();
  @Input() allDataEntered: boolean = false;
  isMe: boolean = false;

  constructor(private _location: Location, protected _dataService: DataService, public colorService: ColorsService, private _userService: UserService) {
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (environment.production)
      console.log("USER", this._userService.user);
  }

  onSubmit() : void {
    this.fillInProfile();
    super.onSubmit(environment.LAB_ORDERS);
  }

  ngOnDestroy(): void {

  }

  fillInProfile(): void {
    if (this._userService.user && this.isMe) {
      this._userService.user.temp.firstName = this.data.firstName;
      this._userService.user.temp.lastName = this.data.lastName;
      this._userService.user.temp.streetAddress1 =  this.data.streetAddress1;
      this._userService.user.temp.streetAddress2 =  this.data.streetAddress2;
      this._userService.user.temp.city =  this.data.city;
      this._userService.user.temp.province =  this.data.province;
      this._userService.user.temp.zip =  this.data.zip;
      this._userService.user.temp.gender =  this.data.gender;
      this._userService.user.temp.dob =  this.data.dob;
      this._userService.user.temp.email =  this.data.email;
      this._userService.user.temp.phoneNumber =  this.data.phone;
    }
  }

  onLabOrder(): void {
    this.data.status = "Activated";
    this.onSubmit();
  }

  onOrderID(): void {
    this.goBack.emit('orderID');
  }

  onName(): void {
    this.goBack.emit('name');
  }

  onDob(): void {
    this.goBack.emit('dob');
  }

  onGender(): void {
    this.goBack.emit('gender');
  }

  onTimeCollected(): void {
    this.goBack.emit('collection-time');
  }

  onPhone(): void {
    this.goBack.emit('phone');
  }

  onKitNumber(): void {
    this.goBack.emit('kit-number');
  }

  onEmail(): void {
    this.goBack.emit('email');
  }

  onAddress(): void {
    this.goBack.emit('address');
  }

}
