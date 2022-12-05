import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderService } from 'src/app/shared/services/order.service';
import { environment } from 'src/environments/environment';

export const MONTHS = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const orderDate_TYPE = ["By Appointment Date", "By Order Date"];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {

  @Output() id = new EventEmitter();
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
  public prodEnv: boolean = false;
  public today = new Date();
  public allActive: boolean = false;
  public past30Active: boolean = true;
  public past60Active: boolean = true;
  public past90Active: boolean = true;

  public MONTH = MONTHS;

  constructor(public orderService: OrderService) {

    this.prodEnv = (environment.firebaseConfig.projectId == 'white-form-303916');
    this.past30Days();
  }

  ngOnInit(): void {
    this._dataSubscription = this.orderService.items?.subscribe((data) => {
      this.data = data;
      this.loading = 'complete'
    })

    if (!environment.production)
      console.log("Today is", this.today.toLocaleDateString(), this.MONTH[(this.today.getMonth())], this.today.getDate(), this.today.getFullYear());

  }

  ngOnDestroy(): void {
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
  }

  public onAll(): void {
    this.orderService.getAll();
    this.past30Active = false;
    this.past60Active = false;
    this.past90Active = false;
    this.allActive = true;
  }

  public past30Days(): void {
    let today = new Date();
    let queryDate = new Date();
    queryDate.setDate(today.getDate() - 30);
    this.orderService.getAllByGreaterDate(queryDate.getTime());
    this.past30Active = true;
    this.past60Active = false;
    this.past90Active = false;
    this.allActive = false;
  }

  public past60Days(): void {
    let today = new Date();
    let queryDate = new Date();
    queryDate.setDate(today.getDate() - 60);
    this.orderService.getAllByGreaterDate(queryDate.getTime());
    this.past30Active = false;
    this.past60Active = true;
    this.past90Active = false;
    this.allActive = false;
  }

  public past90Days(): void {
    let today = new Date();
    let queryDate = new Date();
    queryDate.setDate(today.getDate() - 90);
    this.orderService.getAllByGreaterDate(queryDate.getTime());
    this.past30Active = false;
    this.past60Active = false;
    this.past90Active = true;
    this.allActive = false;
  }


  public onToday(): void {
    this.orderService.getAllByAppointmentDate((this.MONTH[(this.today.getMonth())] + this.today.getDate() + ", " + this.today.getFullYear()))
  }

  public onTomorrow(): void {

  }

  public onView(value: any): void {
    this.id.emit(value);
  }

  ordersByDate(): void {
    const qD = new Date(this.queryDate);
    qD.setDate(qD.getDate() + 1);

    this.data3 = this.data.filter((e: any) => {
      var date = new Date(e.lastUpdated).toLocaleDateString();
      // if (!environment.production)
      //   console.log("Compare Dates", date, qD.toLocaleDateString())
      return (date == qD.toLocaleDateString());
    });

    this.currentDataDisplay = 'none';
    this.pastDataDisplay = 'none';
    this.queryDateDisplay = '';

  }

}
