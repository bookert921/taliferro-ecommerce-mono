import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

export const GENDERS = [
  { 'name': 'Male', 'value': 'M' },
  { 'name': 'Female', 'value': 'F' },
];

@Component({
  selector: 'app-customer-edit-gender',
  templateUrl: './customer-edit-gender.component.html',
  styleUrls: ['./customer-edit-gender.component.css']
})
export class CustomerEditGenderComponent extends DataHandlerComponent implements OnInit {

  public GENDERS = GENDERS;

  constructor(protected _dataService: DataService, public colorService: ColorsService) { 
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onSubmit() : void {
    super.onSubmit(environment.CUSTOMERS);
  }

}
