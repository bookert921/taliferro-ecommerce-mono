import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  @Output() id = new EventEmitter();
  data: any;
  filteredData = '';


  constructor(public customerService: CustomerService) {
    this.customerService.getAll();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  public onView(value: any): void {
    this.id.emit(value);
  }


}
