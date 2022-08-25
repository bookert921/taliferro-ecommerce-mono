import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/services/user.service';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { SettingService } from 'src/app/shared/services/setting.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-start',
  templateUrl: './admin-start.component.html',
  styleUrls: ['./admin-start.component.css']
})
export class AdminStartComponent implements OnInit, OnDestroy {

  message: any;
  public environment = environment;

  private _userSubscription?: Subscription;

  constructor(private _location: Location, public colorService: ColorsService, public authService: AuthService, private _router: Router, public userService: UserService, public settingService: SettingService) {
  }

  ngOnInit(): void {
    if (this.authService.firebaseUser)
    this.listenForUser();
    else
    this._router.navigate(['settings', 'sign-in-first']);
  }

  ngOnDestroy(): void {
    if (this._userSubscription)
      this._userSubscription.unsubscribe();
  }

  private listenForUser(): void {
    this._userSubscription = this.userService.userSubject.subscribe((user) => {
      if (!environment.production)
        console.log("AdminStart has user from firebase", user);

      if (!this.settingService.settings && user.companyId)  {
        this.settingService.retrieveSettings(user.companyId);  
        this.settingService.item?.subscribe((setting) => {
          if (setting.hasOwnProperty('companyName')) {
            this.settingService.settings = setting;
          } else {
            this._router.navigate(['settings', 'create-account'])
          }

        })
      } 
    });
  }


  back(): void {
    this._location.back()
  }

  onSignOut(): void {
    this._router.navigate(['identity', 'bye']);
  }




}
