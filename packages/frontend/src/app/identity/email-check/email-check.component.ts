import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Subscription, Subject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { SettingService } from 'src/app/shared/services/setting.service';
import { IUser } from 'src/app/shared/data/user.model';
import { DataService } from 'src/app/shared/services/data.service';
import { take } from 'rxjs/operators';
import firebase from 'firebase/app';

@Component({
  selector: 'app-email-check',
  templateUrl: './email-check.component.html',
  styleUrls: ['./email-check.component.css']
})
export class EmailCheckComponent implements OnInit {

  public url: any;
  public idMismatch: boolean = false;
  public isRelogin: boolean = false;

  public errorMessage: any;

  private _dataSubscription?: Subscription;
  private _settingSubscription?: Subscription;

  constructor(private _router: Router, private _authService: AuthService, private _location: Location, public userService: UserService, private _settingService: SettingService, private _dataService: DataService) { }

  ngOnInit(): void {
    this.url = this._router.url;
    this.checkLoginState();
  }

  ngOnDestroy(): void {
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
  }

  back(): void {
    this._location.back();
  }

  private async checkLoginState() {
    const email = window.localStorage.getItem('emailForSignIn');
    window.localStorage.removeItem('emailForSignIn');

    this.processEmailAddress(email);
  }

  private processEmailAddress(email: any) {
    if (email)
      this.beginLoginWithEmail(email, this.url);
    else {
      this.isRelogin = true;
      this.errorMessage = "Something went wrong. Either your email address is wrong, or you are using a different browser other than the browser you used to identify yourself, or the link in your email is expired. Make sure you use the same browser for both signing in and verifying. If you are unsure copy the link in the email that was sent to you and paste it in the address bar of the same browser you used that says 'Check Your Email'.";
    }
  }

  private async beginLoginWithEmail(email: any, url: any) {
    let loginOK = await this._authService.confirmSignIn(email, url);
    const isLoginOK: boolean = (loginOK == 'true');

    if (isLoginOK) {
      // if (!environment.production)
      console.log("LOG IN OK", email);
      this.associateUser(email);
    } else {
      // if (!environment.production)
      console.log("LOG NOT OK", email);
      this.isRelogin = true;
      this.errorMessage = "Something went wrong. Either your email address is wrong, or you are using a different browser other than the browser you used to identify yourself, or the link in your email is expired. Make sure you use the same browser for both signing in and verifying. If you are unsure copy the link in the email that was sent to you and paste it in the address bar of the same browser you that says 'Check Your Email'.";
      setTimeout(() => {
        this.errorMessage = ('');
      }, 6000);

    }
    this.idMismatch = false;
  }

  private async associateUser(email: any) {
    if (this._authService.firebaseUser) {
      let user = await this.getUser(this._authService.firebaseUser);
      // let u = this.userService.getNewUserRecordUsingFirebase(this._authService.firebaseUser);

      this.checkUserRecord(user);

    } else {
      this._router.navigate(['my', 'error']);
    }
  }

  private checkUserRecord(user: any): void {
    if (user) {
      let newUserCheck = this.isNewUserSignUpCheck(user);

      if (!environment.production)
        console.log("EmailCheck - associateUser - user returned", user);

      this.userService.user = user;

      if (newUserCheck)
        this.newSettings(user);

      this.associateSettings();
    } else {
      this._router.navigate(['my', 'error']);
    }

  }

  private async associateSettings() {
    if (this.userService.user && this.userService.user.companyId) {
      let settings = await this.getSettings(this.userService.user.companyId);
      if (!environment.production)
        console.log("EmailCheck - settings returned", settings);

      this.proceedAccordingToUser();
    } else {
      this.proceedAccordingToUser();
    }
  }


  // private checkSettings(): void {
  //   if (!environment.production)
  //     console.log("EmailCheck - checkSettings", this._settingService.settings, this.userService.user);

  //   this.proceedAccordingToUser();
  // }

  private proceedAccordingToUser(): void {
    if (!environment.production)
      console.log("COMPARE proceedAccordingToUser", this._settingService.settings, this.userService.user?.companyId);

    if ((this._settingService.settings && this.userService.user) && this._settingService.settings._id && (this._settingService.settings._id === this.userService.user?.companyId)) {
      this._router.navigate(['admin']);
    } else {
      this._router.navigate(['my']);
    }
  }

  private async getUser(firebaseUser: firebase.User) {
    if (!environment.production)
      console.log("EmailCheck - starting getUser", firebaseUser);

    return new Promise((resolve, reject) => {
      this._dataService.get(environment.USERS, firebaseUser.uid);
      this._dataSubscription = this._dataService.item?.pipe(take(1)).subscribe((u: any) => {
        if (!environment.production)
          console.log("EmailCheck - getUser returned", u);

        if (u && u._id && u.email) {
          this.userService.notifyListners(u);
          resolve(u);
        }
        else {
          resolve(this.userService.getNewUserRecordUsingFirebase(firebaseUser));
        }
      })
    })
  }

  private async getSettings(companyId: any) {
    return new Promise((resolve, reject) => {
      this._settingService.retrieveSettings(companyId);
      this._settingSubscription = this._settingService.item?.pipe(take(1)).subscribe((setting) => {
        if (!environment.production)
          console.log("EmailCheck - getSettings returned", setting);

        if (setting && setting._id && setting.companyName) {
          this._settingService.settings = setting;
          resolve(setting);
        }
        else {
          resolve(null);
        }
      })
    })
  }

  private isNewUserSignUpCheck(user: IUser): boolean {
    const firstName = window.localStorage.getItem('firstName');
    const lastName = window.localStorage.getItem('lastName');
    const companyName = window.localStorage.getItem('companyName');
    const companyId = window.localStorage.getItem('companyId');

    this.removeNewSignUpInfo();

    if (firstName && lastName) {
      // if (!environment.production)
      console.log("Must be new registration", companyName, companyId, firstName, lastName);

      user.companyName = (companyName) ? companyName : '';
      user.firstName = firstName;
      user.lastName = lastName;
      user.companyId = (companyId) ? companyId : user._id;
      return true;
    };
    return false;
  }

  private removeNewSignUpInfo(): void {
    window.localStorage.removeItem('diaplayName');
    window.localStorage.removeItem('firstName');
    window.localStorage.removeItem('lastName');
    window.localStorage.removeItem('companyName');
    window.localStorage.removeItem('companyId');
  }

  private newSettings(user: IUser): void {
    let data = {
      companyName: user.companyName,
      uid: user._id,
    }

    let storeID = this._settingService.newStoreSetting(data);

    user.companyId = storeID;

    this.userService.user = user;
    this.userService.update();

  }
}
