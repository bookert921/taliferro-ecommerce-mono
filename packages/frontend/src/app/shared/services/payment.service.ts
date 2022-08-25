import { Injectable, OnInit } from '@angular/core';
import { GeneralDataService } from './general-data.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaymentService extends GeneralDataService  {

  private _collectionName = environment.PAYMENTS;

  getData(ID: string) {
    super.get(ID, this._collectionName);
  }

  getAll() {
    super.getAll(this._collectionName);
  }

  createData(data: any) {
    super.create(data, this._collectionName);
  }

  delete(id:string) {
    super.delete(id, this._collectionName);
  }

}
