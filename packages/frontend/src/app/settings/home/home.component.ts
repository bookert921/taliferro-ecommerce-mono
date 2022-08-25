import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingService } from 'src/app/shared/services/setting.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/services/user.service';
import { environment } from 'src/environments/environment';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isNameEdit: boolean = false;
  public isAddressEdit: boolean = false;
  public isDOBEdit: boolean = false;
  public isGenderEdit: boolean = false;
  public isPaymentInfoEdit: boolean = false;
  public isCompanyNameEdit: boolean = false;
  public isCompanyPhoneEdit: boolean = false;
  public isCompanyDescriptionEdit: boolean = false;
  public isCompanyEmailEdit: boolean = false;
  public isCompanyTitleEdit: boolean = false;
  public isCompanyAboutEdit: boolean = false;
  public isSocial: boolean = false;
  public isLogoEdit: boolean = false;
  public isColorsEdit: boolean = false;
  public isOrderButtonEdit: boolean = false;
  public isSectionEdit: boolean = false;
  public isOrderHistory: boolean = false;
  public isTestHistory: boolean = false;
  public isHomeImage: boolean = false;
  public isSiteType: boolean = false;
  public isUserCompanyNameEdit: boolean = false;
  public isUserEmailEdit: boolean = false;
  public isUserPhoneNumberEdit: boolean = false;
  public diagnostic: boolean = false;
  public isAboutProduct1: boolean = false;
  public isAboutProduct2: boolean = false;
  public isAboutProduct3: boolean = false;
  public isFAQ1: boolean = false;
  public isFAQ2: boolean = false;
  public isFAQ3: boolean = false;
  public isFeatures1: boolean = false;
  public isFeatures2: boolean = false;
  public isFeatures3: boolean = false;
  public isHowTo1: boolean = false;
  public isVideo1: boolean = false;
  public isVideo2: boolean = false;
  public isCategories: boolean = false;
  public isSubCategories: boolean = false;
  public isProductType: boolean = false;
  public isDependecyCode: boolean = false;
  public isStripe: boolean = false;
  public isAdmin: boolean = false;

  private _settingSubscription?: Subscription;

  public company : any = {
    logos: [],
    files: [],
    colors: [],
    description: 'Company Description',
    name: '',
    siteType: 'micro',
    google_verification: true,
  };
  public siteType: any;


  constructor(private _router:Router, private _settingService: SettingService, private _location: Location, public colorService: ColorsService, public authService: AuthService, private _dataService: DataService) {
    this.siteType = environment.siteType;
    this._settingService.userStoreSettings();
  }

  ngOnInit(): void {
    this._settingSubscription = this._settingService.item?.subscribe((setting) => {
      this._settingService.settings = setting;
      this.company = this._settingService.settings;
    })
  }

  ngOnDestroy(): void {
    if (this._settingSubscription)
      this._settingSubscription.unsubscribe();
  }

  onSignOut() : void {
    this._router.navigate(['identity', 'bye']);
  }


  onOrderHistory(): void {
    this.editReset();
    this.isOrderHistory = true;
  }

  onProductCategories() : void {
    this.editReset();
    this.isCategories = true;
  }

  onHomeImage(): void {
    this.editReset();
    this.isHomeImage = true;
  }

  setDiagnostic(): void {
    this.diagnostic = !this.diagnostic;
    this.editReset();
  }

  onAboutProduct1(): void {
    this.editReset();
    this.isAboutProduct1 = true;
  }

  onAboutProduct2(): void {
    this.editReset();
    this.isAboutProduct2 = true;
  }

  onAboutProduct3(): void {
    this.editReset();
    this.isAboutProduct3 = true;
  }

  onHowTo1(): void {
    this.editReset();
    this.isHowTo1 = true;
  }

  onFAQ1(): void {
    this.editReset();
    this.isFAQ1 = true;
  }

  onFAQ2(): void {
    this.editReset();
    this.isFAQ2 = true;
  }

  onFAQ3(): void {
    this.editReset();
    this.isFAQ3 = true;
  }

  onFeatures1(): void {
    this.editReset();
    this.isFeatures1 = true;
  }

  onFeatures2(): void {
    this.editReset();
    this.isFeatures2 = true;
  }

  onFeatures3(): void {
    this.editReset();
    this.isFeatures3 = true;
  }


  onVideo1(): void {
    this.editReset();
    this.isVideo1 = true;
  }

  onVideo2(): void {
    this.editReset();
    this.isVideo2 = true;
  }

  onTestHistory(): void {
    this.editReset();
    this.isTestHistory = true;
  }

  onName(): void {
    this.editReset();
    this.isNameEdit = true;
  }

  onOrderButtonText(): void {
    this.editReset();
    this.isOrderButtonEdit = true;
  }

  back(): void {
    this._location.back()
  }

  onStripe(): void {
    this.editReset();
    this.isStripe = true;
  }

  onAboutCompany(): void {
    this.editReset();
    this.isCompanyAboutEdit = true;
  }

  onUserCompanyName(): void {
    this.editReset();
    this.isUserCompanyNameEdit = true;
  }

  onUserEmail(): void {
    this.editReset();
    this.isUserEmailEdit = true;
  }

  onUserPhone(): void {
    this.editReset();
    this.isUserPhoneNumberEdit = true;
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

  onProductTypes(): void {
    this.editReset();
    this.isProductType = true;
  }

  onProductDependencyCodes(): void {
    this.editReset();
    this.isDependecyCode = true;
  }

  onProductSubCategories(): void {
    this.editReset();
    this.isSubCategories = true;
  }

  onCompanyName(): void {
    this.editReset();
    this.isCompanyNameEdit = true;
  }

  onCompanyPhone(): void {
    this.editReset();
    this.isCompanyPhoneEdit = true;
  }

  onSection(): void {
    setTimeout(() => {
      this.setCompany();
    }, 1000);
  }

  setCompany(): void {
    this._dataService.update(environment.SETTINGS, this.company._id, this.company);
  }

  onCompanyEmail(): void {
    this.editReset();
    this.isCompanyEmailEdit = true;
  }

  onCompanyTitle(): void {
    this.editReset();
    this.isCompanyTitleEdit = true;
  }

  onCompanyDescription(): void {
    this.editReset();
    this.isCompanyDescriptionEdit = true;
  }

  onLogo(): void {
    this.editReset();
    this.isLogoEdit = true;
  }

  onColors(): void {
    this.editReset();
    this.isColorsEdit = true;
  }

  onSocial(): void {
    this.editReset();
    this.isSocial = true;
  }

  onSiteType(): void {
    this.editReset();
    this.isSiteType = true;
  }

  editReset(): void {
    this.isColorsEdit = false;
    this.isCompanyAboutEdit = false;
    this.isCompanyDescriptionEdit = false;
    this.isCompanyEmailEdit = false;
    this.isCompanyPhoneEdit = false;
    this.isCompanyTitleEdit = false;
    this.isLogoEdit = false;
    this.isCompanyNameEdit = false;
    this.isSectionEdit = false;
    this.isOrderButtonEdit = false;
    this.isSectionEdit = false;
    this.isAddressEdit = false;
    this.isPaymentInfoEdit = false;
    this.isDOBEdit = false;
    this.isGenderEdit = false;
    this.isNameEdit = false;
    this.isSocial = false;
    this.isTestHistory = false;
    this.isOrderHistory = false;
    this.isHomeImage = false;
    this.isSiteType = false;
    this.isUserCompanyNameEdit = false;
    this.isUserEmailEdit = false;
    this.isUserPhoneNumberEdit = false;
    this.isAboutProduct1 = false;
    this.isAboutProduct2 = false;
    this.isAboutProduct3 = false;
    this.isFAQ1 = false;
    this.isFAQ2 = false;
    this.isFAQ3 = false;
    this.isFeatures1 = false;
    this.isFeatures2 = false;
    this.isFeatures3 = false;
    this.isVideo1 = false;
    this.isVideo2 = false;
    this.isHowTo1 = false;
    this.isCategories = false;
    this.isProductType = false;
    this.isStripe = false;
    this.isDependecyCode = false;
    this.isSubCategories = false;

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }
}
