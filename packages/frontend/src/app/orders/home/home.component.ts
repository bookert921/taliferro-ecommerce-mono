import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: any;
  public isEditMode: boolean = false;
  public isEditing: boolean = false;

  public isRequisitionView: boolean = false;
  public isOrderView: boolean = false;

  public viewToggle: boolean = false;

  public isOrderAddress: boolean = false;
  public isOrderDob: boolean = false;
  public isOrderEmail: boolean = false;
  public isOrderGender: boolean = false;
  public isOrderKitNumber: boolean = false;
  public isOrderName: boolean = false;
  public isOrderNationality: boolean = false;
  public isOrderVaccinated: boolean = false;
  public isOrderPassportNumber: boolean = false;
  public isOrderInsurance: boolean = false;
  public isDiagnostic: boolean = false;
  public isOrderPhoneNumber: boolean = false;
  public isOrderSsn: boolean = false;
  public isStatus: boolean = false;
  public isLIS: boolean = false;
  public isAdmin: boolean = false;

  public colStyle = 'none';


  constructor(private _router: Router, private _location: Location, public userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.admin$.subscribe((result) => {
      this.isAdmin = result.valueOf();
    });

  }

  onDashboard(): void {
    this._router.navigate(['admin']);
  }

  onSignOut(): void {
    this._router.navigate(['identity', 'bye']);
  }


  back(): void {
    this._location.back()
  }

  list(): void {
    this.isEditMode = false;
    this.colStyle = 'none';
  }

  onView(data: any) {
    this.isEditMode = true;
    this.colStyle = '';
    this.data = data;
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  onEdit(event: any): void {
    if (!environment.production)
      console.log("onEdit", event);


    this.editReset();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    switch (event) {
      case 'address':
        this.onOrderAddress();
        break;
      case 'dob':
        this.onOrderDob();
        break;
      case 'email':
        this.onOrderEmail();
        break;
      case 'gender':
        this.onOrderGender();
        break;
      case 'kitNumber':
        this.onOrderKitNumber();
        break;
      case 'name':
        this.onOrderName();
        break;
      case 'nationality':
        this.onOrderNationality();
        break;
      case 'passportNumber':
        this.onOrderPassportNumber();
        break;
      case 'vaccinated':
        this.onOrderVaccinated();
        break;
      case 'insurance':
        this.onOrderInsurance();
        break;
      case 'phone':
        this.onOrderPhoneNumber();
        break;
      case 'ssn':
        this.onOrderSsn();
        break;
      case 'status':
        this.onOrderStatus();
        break;
      case 'lis':
        this.onLIS();
        break;
      case 'diagnostic':
        this.setDiagnostic();
        break;
      default:
        break;
    }
  }

  editReset(): void {
    this.isOrderAddress = false;
    this.isOrderVaccinated = false;
    this.isOrderDob = false;
    this.isOrderEmail = false;
    this.isOrderGender = false;
    this.isOrderKitNumber = false;
    this.isOrderName = false;
    this.isOrderNationality = false;
    this.isOrderPassportNumber = false;
    this.isOrderInsurance = false;
    this.isEditing = false;
    this.isOrderPhoneNumber = false;
    this.isOrderSsn = false;
    this.isStatus = false;
    this.isLIS = false;
  }

  setDiagnostic(): void {
    this.isDiagnostic = !this.isDiagnostic;
    this.isEditing = !this.isEditing;
  }

  onLIS(): void {
    this.isLIS = true;
    this.isEditing = true;
  }

  onOrderStatus(): void {
    this.isStatus = true;
    this.isEditing = true;
  }

  onOrderVaccinated(): void {
    this.isOrderVaccinated = true;
    this.isEditing = true;
  }

  onOrderPhoneNumber(): void {
    this.isOrderPhoneNumber = true;
    this.isEditing = true;
  }

  onOrderSsn(): void {
    this.isOrderSsn = true;
    this.isEditing = true;
  }

  onOrderAddress(): void {
    this.isEditing = true;
    this.isOrderAddress = true;
  }

  onOrderDob(): void {
    this.isEditing = true;
    this.isOrderDob = true;
  }

  onOrderEmail(): void {
    this.isEditing = true;
    this.isOrderEmail = true;
  }

  onOrderGender(): void {
    this.isEditing = true;
    this.isOrderGender = true;
  }

  onOrderKitNumber(): void {
    this.isEditing = true;
    this.isOrderKitNumber = true;
  }

  onOrderName(): void {
    this.isEditing = true;
    this.isOrderName = true;
  }

  onOrderNationality(): void {
    this.isEditing = true;
    this.isOrderNationality = true;
  }

  onOrderPassportNumber(): void {
    this.isEditing = true;
    this.isOrderPassportNumber = true;
  }

  onOrderInsurance(): void {
    this.isEditing = true;
    this.isOrderInsurance = true;
  }

}
