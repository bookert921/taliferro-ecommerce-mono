import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderService } from 'src/app/shared/services/order.service';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-req-list',
  templateUrl: './req-list.component.html',
  styleUrls: ['./req-list.component.css']
})
export class ReqListComponent implements OnInit, OnDestroy {

  loading: any;
  private _dataSubscription?: Subscription;
  data: any;
  filteredData = '';
  public currentDataDisplay = '';
  public pastDataDisplay = 'none';
  public queryDateDisplay = "none"
  public queryDate: any;
  public ordersHolding: any;
  
  public data3: any;
  public active1: boolean = false;
  public active2: boolean = false;
  public active3: boolean = false;
  public active4: boolean = false;
  public FILTER_TYPE = "COVID-19 Test For Travel To China";
  public chinaOnly: boolean = false;

  constructor(public orderService: OrderService, private _location: Location, public colorService: ColorsService) {
    
    this.orderService.getAll();
  }

  ngOnInit(): void {
    this._dataSubscription = this.orderService.items?.subscribe((data) => {
      this.data = data;
      this.showCurrentData();
      this.loading = 'complete';
    })
  }

  ngOnDestroy(): void {
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
  }

  back(): void {
    this._location.back()
  }


  resetClasses(): void {
    this.active1 = false;
    this.active2 = false;
    this.active3 = false;
    this.active4 = false;
  }

  showAll(): void {
    this.resetClasses();
    this.active1 = true;
    this.data3 = this.data;
  }

  showCurrentData(): void {
    this.resetClasses();
    this.active2 = true;
    const today = new Date();
    const yesterday = new Date();
    this.queryDate = yesterday.setDate(today.getDate() - 1);
    if (!environment.production)
      console.log("QueryDate", yesterday.toLocaleDateString());
    this.ordersByDate();
  }


  showPastData(): void {
    this.resetClasses();
    this.active3 = true;
    const today = new Date();
    const yesterday = new Date();
    this.queryDate = yesterday.setDate(today.getDate() - 2);
    if (!environment.production)
      console.log("QueryDate", this.queryDate.toLocaleDateString());
    this.ordersByDate();
  }

  sortItems(): void {
    if (!environment.production)
      console.log("Sorting");
    this.data3 = this.data3.sort((a: any, b: any) => {
      if ((a && a.appointment && a.appointment.time) && (b && b.appointment && b.appointment.time)) {

        let aTime = this.parseTime(a.appointment.time, a.appointment.date);
        let bTime = this.parseTime(b.appointment.time, b.appointment.date);
        if (!environment.production)
          console.log("aTime", aTime, "bTime", bTime);
        if (aTime > bTime) return 1;
        if (aTime < bTime) return -1;
      }
      return 0;
    });
  }

  parseTime(t: any, passedDate: any) {
    let d = new Date(passedDate);
    let time = t.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    try {
      d.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
      d.setMinutes(parseInt(time[2]) || 0);
    } catch (error) {

    }
    return d;
  }

  showFutureData(): void {
    this.resetClasses();
    this.active3 = true;
    const tomorrow = new Date();
    this.queryDate = tomorrow;
    if (!environment.production)
      console.log("QueryDate", this.queryDate.toLocaleDateString());
    this.ordersByDate();
  }

  byDate(): void {
    this.resetClasses();
    this.active4 = true;
    this.ordersByDate();
  }

  doChinaOnly(): void {
    this.chinaOnly = !this.chinaOnly;
    this.ordersByDate();
  }

  ordersByDate(): void {
    const qD = new Date(this.queryDate);
    qD.setDate(qD.getDate() + 1);

    this.data3 = this.data.filter((e: any) => {
      var date = (e.appointment && e.appointment.date) ? new Date(e.appointment.date).toLocaleDateString() : new Date(e.lastUpdated).toLocaleDateString();

      if (!environment.production)
        console.log(this.chinaOnly, "Compare Dates", qD.toLocaleDateString())

      return (!this.chinaOnly) ? (date == qD.toLocaleDateString()) : ((date == qD.toLocaleDateString()) && (!e.appointment.canceled) && (e.appointment && e.appointment.category && e.appointment.category.indexOf(this.FILTER_TYPE) >= 0));
    });

    this.sortItems();
  }

}
