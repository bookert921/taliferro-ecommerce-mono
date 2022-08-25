import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/shared/services/order.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { environment } from 'src/environments/environment';
import { SettingService } from 'src/app/shared/services/setting.service';

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


  constructor(private _location: Location, public orderService: OrderService, public userService: UserService, public colorService: ColorsService, public settingService: SettingService) {
  }

  ngOnInit(): void {
      if (!environment.production)
        console.log("Gettng Orders for User", this.userService.user?._id)
      this.orderService.getAllByUser(this.userService.user?._id);
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
