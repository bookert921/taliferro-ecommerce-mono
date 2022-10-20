import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IUser } from '../../shared/data/user.model';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: any;
  public isEditMode: boolean = false;

  public isCustomerType: boolean = false;
  public isCustomerImage: boolean = false;
  public isCustomerStatus: boolean = false;
  public isCustomerEmail: boolean = false;
  public isCustomerPhone: boolean = false;
  public isCustomerName: boolean = false;
  public isCustomerAddress: boolean = false;
  public isCustomerPersonal: boolean = false;
  public isCustomerCredit: boolean = false;
  public isCustomerTitle: boolean = false;
  public isCustomerDob: boolean = false;
  public isCustomerGender: boolean = false;
  public isDiagnostic: boolean = false;


  public newUser: IUser = {

  }

  constructor(private _location: Location, public colorService: ColorsService, private _router: Router) { }

  ngOnInit(): void {
  }

  back(): void {
    this._location.back();
  }

  editReset(): void {
    this.isCustomerType = false;
    this.isCustomerImage = false;
    this.isCustomerStatus = false;
    this.isCustomerEmail = false;
    this.isCustomerPhone = false;
    this.isCustomerName = false;
    this.isCustomerAddress = false;
    this.isCustomerPersonal = false;
    this.isCustomerCredit = false;
    this.isCustomerTitle = false;
    this.isCustomerDob = false;
    this.isCustomerGender = false;
    this.isDiagnostic = false;

  }

  list(): void {
    this.isEditMode = false;
  }

  onView(data: any) {
    this.data = data;
    this.isEditMode = true;
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  onNew(): void {
    this.isEditMode = true;
    this.data = this.newUser;
  }

  onDashboard(): void {
    this._router.navigate(['admin']);
  }

  onSignOut(): void {
    this._router.navigate(['identity', 'bye']);
  }

  onEdit(event: any): void {
    this.editReset();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    switch (event) {
      case 'type':
        this.onType();
        break;
      case 'image':
        this.onImage();
        break;
      case 'status':
        this.onStatus();
        break;
      case 'email':
        this.onEmail();
        break;
      case 'name':
        this.onName();
        break;
      case 'phone':
        this.onPhone();
        break;
      case 'address':
        this.onAddress();
        break;
      case 'personal':
        this.onPersonal();
        break;
      case 'credit':
        this.onCredit();
        break;
      case 'title':
        this.onTitle();
        break;
      case 'dob':
        this.onDob();
        break;
      case 'gender':
        this.onGender();
        break;
      case 'close':
        this.onClose();
        break;
      case 'diagnostic':
        this.setDiagnostic();
        break;

    }

  }

  onClose(): void {
    this.data = undefined;
    this.isEditMode = false;
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  setDiagnostic(): void {
    this.isDiagnostic = !this.isDiagnostic;
  }


  public onGender(): void {
    this.isCustomerGender = true;
  }

  public onDob(): void {
    this.isCustomerDob = true;
  }

  public onType(): void {
    this.isCustomerType = true;
  }

  public onImage(): void {
    this.isCustomerImage = true;
  }

  public onStatus(): void {
    this.isCustomerStatus = true;
  }

  public onEmail(): void {
    this.isCustomerEmail = true;
  }

  public onName(): void {
    this.isCustomerName = true;
  }

  public onPhone(): void {
    this.isCustomerPhone = true;
  }

  public onAddress(): void {
    this.isCustomerAddress = true;
  }

  public onPersonal(): void {
    this.isCustomerType = true;
  }

  public onCredit(): void {
    this.isCustomerCredit = true;
  }

  public onTitle(): void {
    this.isCustomerTitle = true;
  }

}
