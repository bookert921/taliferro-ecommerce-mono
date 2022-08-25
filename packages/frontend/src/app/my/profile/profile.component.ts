import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { SettingService } from 'src/app/shared/services/setting.service';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public isNameEdit: boolean = false;
  public isAddressEdit: boolean = false;
  public isDOBEdit: boolean = false;
  public isGenderEdit: boolean = false;
  public isPaymentInfoEdit: boolean = false;
  public isPhoneEdit: boolean = false;
  public isEmailEdit: boolean = false;
  public user;
  public diagnostic: boolean = false;
  public production: boolean = false;
  public isCompanyNameEdit: boolean = false;
  public isPracticeEdit: boolean = false;
  public isUserTypeEdit: boolean = false;

  constructor(private _userService: UserService, private _location: Location, public settingService: SettingService, public colorService: ColorsService) { 
    this.user = this._userService.user;
    
  }

  ngOnInit(): void {
  }

  back(): void {
    this._location.back()
  }

  setDiagnostic(): void {
    this.diagnostic = !this.diagnostic;
    this.editReset();
  }

  onPracName(): void {
    this.editReset();
    this.isPracticeEdit = true;
  }

  onUserType(): void {
    this.editReset();
    this.isPracticeEdit = true;
  }

  onName(): void {
    this.editReset();
    this.isNameEdit = true;
  }

  onCompanyName(): void {
    this.editReset();
    this.isCompanyNameEdit = true;
  }

  onAddress(): void {
    this.editReset();
    this.isAddressEdit = true;
  }

  onDob(): void {
    this.editReset();
    this.isDOBEdit = true;
  }

  onGender(): void {
    this.editReset();
    this.isGenderEdit = true;
  }

  onPaymentInfo(): void {
    this.editReset();
    this.isPaymentInfoEdit = true;
  }

  onEmail(): void {
    this.editReset();
    this.isEmailEdit = true;
  }
  onPhone(): void {
    this.editReset();
    this.isPhoneEdit = true;
  }

  editReset() : void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    this.isAddressEdit = false;
    this.isPaymentInfoEdit = false;
    this.isDOBEdit = false;
    this.isGenderEdit = false;
    this.isNameEdit = false;
    this.isPhoneEdit = false;
    this.isEmailEdit = false;
    this.isCompanyNameEdit = false;
    this.isPracticeEdit = false;
    this.isUserTypeEdit = false;
  }



}
