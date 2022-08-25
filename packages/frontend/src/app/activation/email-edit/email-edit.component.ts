import { Component, OnInit, OnDestroy, Output,  EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

import { DataService } from 'src/app/shared/services/data.service';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';

import { environment } from "../../../environments/environment";
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-order-email-edit',
  templateUrl: './email-edit.component.html',
  styleUrls: ['./email-edit.component.css']
})
export class EmailEditComponent extends DataHandlerComponent implements OnInit, OnDestroy {

  @Output() goBack = new EventEmitter();

  constructor(private _location: Location, protected _dataService: DataService, public colorService: ColorsService) {
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onSubmit() : void {
    super.onSubmit(environment.LAB_ORDERS);
  }

  ngOnDestroy(): void {

  }


  back(): void {
    this.goBack.emit('phone');
  }

}
