import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Subscription, Subject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { SettingService } from 'src/app/shared/services/setting.service';
import { User } from 'src/app/shared/data/user.model';
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
      this.errorMessage = "Something went wrong. Either your email address is wrong, or you are using a different browser other than the browser you used to identify yourself, or the link in your email is expired. Make sure you use the same browser for both signing in and verifying. If you are unsure copy the link in the email that was sent to you and paste it in the address bar of the same browser you that says 'Check Your Email'.";
    }
  }

  private async beginLoginWithEmail(email: any, url: any) {
    let loginOK = await this._authService.confirmSignIn(email, url);
    const isLoginOK: boolean = (loginOK == 'true');

    if (isLoginOK) {
      this.associateUser();
    } else {
      this.isRelogin = true;
      this.errorMessage = "Something went wrong. Either your email address is wrong, or you are using a different browser other than the browser you used to identify yourself, or the link in your email is expired. Make sure you use the same browser for both signing in and verifying. If you are unsure copy the link in the email that was sent to you and paste it in the address bar of the same browser you that says 'Check Your Email'.";
      setTimeout(() => {
        this.errorMessage.next('');
      }, 6000);

    }
    this.idMismatch = false;
  }

  private async associateUser() {
    if (this._authService.firebaseUser) {
      let user = await this.getUser(this._authService.firebaseUser);

      if (!environment.production)
        console.log("EmailCheck - associateUser - user returned", user);

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

      this.checkSettings();
    } else {
      this.checkSettings();
    }
  }


  private checkSettings(): void {
    if (!environment.production)
      console.log("EmailCheck - checkSettings", this._settingService.settings, this.userService.user);

    if (this._settingService.settings) {
      this.proceedAccordingToUser();
    } else {
      this._router.navigate(['identity', 'logged-in']);
    }
  }

  private proceedAccordingToUser(): void {
    if (!environment.production)
      console.log("COMPARE proceedAccordingToUser", this._settingService.settings, this.userService.user?.companyId);

    if (this._settingService.settings._id && (this._settingService.settings._id === this.userService.user?.companyId)) {
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
}
