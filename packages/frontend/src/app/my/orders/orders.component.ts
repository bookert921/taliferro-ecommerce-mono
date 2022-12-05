import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/shared/services/order.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { environment } from 'src/environments/environment';
import { SettingService } from 'src/app/shared/services/setting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Output() id = new EventEmitter();
  private _dataSubscription?: Subscription;
  public filteredData = '';
  public data: any;
  public production = environment.production;


  constructor(private _router: Router, private _location: Location, public orderService: OrderService, public userService: UserService, public colorService: ColorsService, public settingService: SettingService) {
  }

  ngOnInit(): void {
    try {
      if (!environment.production)
        console.log("Gettng Orders for User", this.userService.user?.email)
      // this.orderService.getAllByUser(this.userService.user?._id);
      this.orderService.getAllByEmail(this.userService.user?.email);
    } catch (error) {
      if (!environment.production)
        console.error("ERROR", "USER", this.userService.user);
      this._router.navigate(['identity']);
    }


  }

  onSignOut(): void {
    this._router.navigate(['identity', 'bye']);
  }

  back(): void {
    this._location.back()
  }

  public onView(value: any): void {
    this.data = value;
  }

  public onClose(event: any): void {
    this.data = undefined;
  }


}
