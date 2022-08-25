import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SettingService } from 'src/app/shared/services/setting.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-your-store-under-construction',
  templateUrl: './your-store-under-construction.component.html',
  styleUrls: ['./your-store-under-construction.component.css']
})
export class YourStoreUnderConstructionComponent implements OnInit, OnDestroy {

  public isUserSite: boolean = false;
  private _userSubscription?: Subscription;
  public environment = environment;

  constructor(public authService: AuthService, public settingService: SettingService, public userService: UserService) { 
    if (!environment.production)
      console.log("YourStoreUnderConstructionComponent");
  }

  ngOnInit(): void {
    this.listenForUser();
  }

  ngOnDestroy(): void {
    if (this._userSubscription)
      this._userSubscription.unsubscribe();
  }

  private listenForUser(): void {
    this._userSubscription = this.userService.userSubject.subscribe((user) => {
      if (!environment.production)
        console.log("YourStoreUnderConstructionComponent - We have user from firebase", user);

      if (!this.settingService.settings && user.companyId)  {
        this.settingService.retrieveSettings(user.companyId);  
        this.settingService.item?.subscribe((setting) => {
          if (setting.hasOwnProperty('companyName')) {
            this.settingService.settings = setting;
            this.isUserSite = (this.userService.user?.companyId === this.settingService.settings._id);
          }

        })
      } 

    });
  }


}
