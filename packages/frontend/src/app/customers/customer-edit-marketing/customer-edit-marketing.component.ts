import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';

@Component({
  selector: 'app-customer-edit-marketing',
  templateUrl: './customer-edit-marketing.component.html',
  styleUrls: ['./customer-edit-marketing.component.css']
})
export class CustomerEditMarketingComponent extends DataHandlerComponent implements OnInit {

  constructor(protected _dataService: DataService) { 
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onSubmit() : void {
    super.onSubmit(environment.CUSTOMERS);
  }

}
