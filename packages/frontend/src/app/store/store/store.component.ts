import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { SettingService } from 'src/app/shared/services/setting.service';
import { UserService } from 'src/app/shared/services/user.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit, OnDestroy {
  private _userSubscription?: Subscription;
  public storeId: any;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _route: ActivatedRoute, private _settingService: SettingService, private _userService: UserService) {
    if (!environment.production)
      console.log("StoreComponent");
  }

  ngOnInit(): void {
    if (!environment.production)
      console.log("StoreComponent - Store ID", this._activatedRoute.data);
    

    this._activatedRoute.data.subscribe((response: any) => {
      response.setting.subscribe((data: any) => {
        console.log("RESPONSE2", data);
      })
    })


    // if (this.storeId)
    //   this.findStore(this.storeId);
    // else
    //   this.listenForUser();
  }

  ngOnDestroy(): void {
    if (this._userSubscription)
      this._userSubscription.unsubscribe();
  }


  private listenForUser(): void {
    this._userSubscription = this._userService.userSubject.subscribe((user) => {
      if (!environment.production)
        console.log("StoreComponent - We have user Store", user);

      if (!this._settingService.settings && user.companyId) {
        this.findStore(user.companyId);
      }

    });
  }



  private findStore(id: string): void {
    this._settingService.retrieveSettings(id);
    this._settingService.item?.subscribe((setting) => {
      this.checkValidSettings(setting, id);
    })
  }

  private checkValidSettings(setting: any, id: string): void {
    if (setting.hasOwnProperty('companyName')) {
      this._settingService.settings = setting;

      if (!environment.production)
        console.log("StoreComponent - Valid record", setting);

      this._router.navigate(['shop', 'store']);

    }
    else {
      if (!environment.production)
        console.log("StoreComponent - Invalid record", setting);

      this._router.navigate(['error']);
    }

  }

  // companySettings(): void {
  //   this._userSubscription = this.userService.userSubject.subscribe(() => {
  //     this._settingsService.setSettings();
  //     this._dataSubscription = this._settingsService.item?.subscribe((data) => {
  //       this.company = data;
  //       this.footerSection = (this.company.hasOwnProperty("footerSection")) ? this.company.footerSection : true;

  //       if (data[0] && data[0].color) {
  //         this.color = data[0].color;
  //         this._colorService.darkBackground = this.color;
  //         this._colorService.color = this.color;
  //         this._colorService.backgroundColor = ColorsService.hexToRGB(data[0].color);
  //       }

  //       if (data[0] && data[0].secondaryColor) {
  //         this._colorService.secondaryColor = data[0].secondaryColor;
  //       }
  //     })

  //   });
  // }


}
