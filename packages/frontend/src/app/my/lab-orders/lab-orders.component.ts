import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { LabOrderService } from 'src/app/shared/services/lab-order.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Subscription } from 'rxjs';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-lab-orders',
  templateUrl: './lab-orders.component.html',
  styleUrls: ['./lab-orders.component.css']
})
export class LabOrdersComponent implements OnInit, OnDestroy {
  @Output() id = new EventEmitter();

  public filteredData = '';
  public found: boolean = false;
  private _dataSubscription?: Subscription;
  public data: any;

  constructor(private _location: Location, public labOrderService: LabOrderService, private _userService: UserService, public colorService: ColorsService) { 
    this.labOrderService.getAllByEmail(this._userService.authService.firebaseUser?.email);
  }

  ngOnInit(): void {
    this._dataSubscription = this.labOrderService.items?.subscribe((data) => {
      this.found = (data.length > 0);
    })
  }

  ngOnDestroy(): void {
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
  }

  onView(value: any) : void {
    this.data = value;
  }
  
  back(): void {
    this._location.back()
  }

  public onClose(event: any): void {
    this.data = undefined;
  }

  

}
