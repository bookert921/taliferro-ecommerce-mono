import { Component, OnInit, OnDestroy, Output,  EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from 'src/app/shared/services/data.service';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';

import { environment } from "../../../environments/environment";
import { ColorsService } from 'src/app/shared/services/colors.service';

export const GENDERS = [
  { 'name': 'Male', 'value': 'M' },
  { 'name': 'Female', 'value': 'F' },
];


@Component({
  selector: 'app-order-gender-edit',
  templateUrl: './gender-edit.component.html',
  styleUrls: ['./gender-edit.component.css']
})
export class GenderEditComponent extends DataHandlerComponent implements OnInit, OnDestroy {

  @Output() goBack = new EventEmitter();

  public GENDERS = GENDERS;

  constructor(private _location: Location, protected _dataService: DataService, public colorService: ColorsService) {
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {

  }

  onSubmit(): void {
    super.onSubmit(environment.LAB_ORDERS);
  }

  back(): void {
    this.goBack.emit('dob');
  }



}
