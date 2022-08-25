import { Component, OnInit, OnDestroy, Output,  EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from 'src/app/shared/services/data.service';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';

import { NgForm } from '@angular/forms';
import { User } from '../../shared/data/user.model';
import { environment } from "../../../environments/environment";
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-order-name-edit',
  templateUrl: './name-edit.component.html',
  styleUrls: ['./name-edit.component.css']
})
export class NameEditComponent extends DataHandlerComponent implements OnInit, OnDestroy {

  @Output() goBack = new EventEmitter();


  constructor(private _location: Location, protected _dataService: DataService, public colorService: ColorsService) {
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
  }


  onSubmit() : void {
    super.onSubmit(environment.LAB_ORDERS);
  }

  back(): void {
    this.goBack.emit('kit-number');
  }

}
