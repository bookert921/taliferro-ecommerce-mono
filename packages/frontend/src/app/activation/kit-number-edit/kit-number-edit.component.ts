import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

import { DataService } from 'src/app/shared/services/data.service';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';

import { environment } from "../../../environments/environment";
import { ColorsService } from 'src/app/shared/services/colors.service';
import { Subscription } from 'rxjs';
import { LabOrderService } from 'src/app/shared/services/lab-order.service';

@Component({
  selector: 'app-kit-number-edit',
  templateUrl: './kit-number-edit.component.html',
  styleUrls: ['./kit-number-edit.component.css']
})
export class KitNumberEditComponent extends DataHandlerComponent implements OnInit, OnDestroy {

  @Output() goBack = new EventEmitter();
  @Output() labOrderFound = new EventEmitter();
  private _dataSubscription?: Subscription;

  constructor(private _location: Location, protected _dataService: DataService, public colorService: ColorsService, private _labOrderService: LabOrderService) {
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onSubmit(): void {
    this.checkIfAlreadyRegistered()
  }

  ngOnDestroy(): void {
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
  }

  private async checkIfAlreadyRegistered() {
    let labOrder = await this.getLabOrderByKitNumber();

    if (!environment.production)
      console.log("LabOrderCheck", labOrder);

    if (labOrder != null) {
      this.labOrderFound.emit(labOrder);
      this.complete();
    } else {
      super.onSubmit(environment.LAB_ORDERS);
    }
  }

  private async getLabOrderByKitNumber() {
    return new Promise((resolve, reject) => {
      this._labOrderService.getAllByKitNumber(this.data.kitNumber);
      this._dataSubscription = this._labOrderService.items?.subscribe((items) => {
        if (items && items.length && (items.length > 0))
          resolve(items[0])
        else
          resolve(null);
      })
    })
  }



  back(): void {
    this.goBack.emit('orderID');
  }

}
