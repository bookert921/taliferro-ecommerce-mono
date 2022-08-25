import { Component, OnInit, OnDestroy, Output,  EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { User } from '../../shared/data/user.model';
import { Subscription } from 'rxjs';
import { environment } from "../../../environments/environment";
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { DataService } from 'src/app/shared/services/data.service';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-order-phone-edit',
  templateUrl: './phone-edit.component.html',
  styleUrls: ['./phone-edit.component.css']
})
export class PhoneEditComponent extends DataHandlerComponent implements OnInit, OnDestroy {

  @Output() goBack = new EventEmitter();

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
    this.goBack.emit('collection-time');
  }

}
