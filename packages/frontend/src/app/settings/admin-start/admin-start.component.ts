import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/services/user.service';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { SettingService } from 'src/app/shared/services/setting.service';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/shared/services/order.service';
import { DataService } from 'src/app/shared/services/data.service';

// Remove this comments

@Component({
  selector: 'app-admin-start',
  templateUrl: './admin-start.component.html',
  styleUrls: ['./admin-start.component.css']
})
export class AdminStartComponent implements OnInit, OnDestroy {

  message: any;
  public environment = environment;
  public currentDataDisplay = '';
  public pastDataDisplay = 'none';
  public queryDate: any;
  public queryDateDisplay = "none"
  public data1: any;
  public data2: any;
  public data3: any;
  public orderHoldingArea: any;

  private _userSubscription?: Subscription;
  private _dataSubscription?: Subscription;

  constructor(private _dataService: DataService, private _orderService: OrderService, private _location: Location, public colorService: ColorsService, public authService: AuthService, private _router: Router, public userService: UserService, public settingService: SettingService) {
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
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
  }

  private listenForUser(): void {
    this._userSubscription = this.userService.userSubject.subscribe((user) => {
      if (!environment.production)
        console.log("AdminStart has user from firebase", user);

      if (!this.settingService.settings && user.companyId) {
        this.settingService.retrieveSettings(user.companyId);
        this.settingService.item?.subscribe((setting) => {
          if (setting.hasOwnProperty('companyName')) {
            if (!environment.production)
              console.log("VAlID SETTINGS from USER", user);
            this.settingService.settings = setting;
            this.setOrderStats();
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

  showCurrentData(): void {
    this.queryDate = null;
    this.data3 = null;
    this.currentDataDisplay = '';
    this.pastDataDisplay = 'none';
    this.queryDateDisplay = "none";
  }

  showPastData(): void {
    this.queryDate = null;
    this.data3 = null;
    this.currentDataDisplay = 'none';
    this.pastDataDisplay = '';
    this.queryDateDisplay = "none";
  }

  ordersByDate(): void {
    const qD = new Date(this.queryDate);
    qD.setDate(qD.getDate() + 1);
    this.data3 = null;

    this.data3 = this.orderHoldingArea.filter((e: any) => {
      var date = new Date(e.updated_at).toLocaleDateString();
      if (!environment.production)
        console.log("Compare Dates", date, qD.toLocaleDateString())
      return (date == qD.toLocaleDateString());
    });

    this.currentDataDisplay = 'none';
    this.pastDataDisplay = 'none';
    this.queryDateDisplay = '';

  }

  showMoreDetails(item: any): void {
    this._router.navigate(['orders', item._id])
  }

  setOrderStats(): void {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);


    this._orderService.orderByTimeStamp();
    this._dataSubscription = this._orderService.items?.subscribe((data) => {
      if (!environment.production)
        console.log("orderByTimeStamp", data);
      this.data1 = data.filter(d => {
        var date = new Date(d.updated_at).toLocaleDateString();
        return (date == today.toLocaleDateString());
      });


      this.data2 = data.filter(e => {
        var date = new Date(e.updated_at).toLocaleDateString();
        return (date == yesterday.toLocaleDateString());
      })

      this.orderHoldingArea = data;
    });

    this._dataService.getAll(environment.ORDERS);
  }

}
