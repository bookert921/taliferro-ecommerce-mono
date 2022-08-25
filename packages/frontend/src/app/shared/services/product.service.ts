import { Injectable, OnInit } from '@angular/core';
import { GeneralDataService } from './general-data.service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GeneralDataService  {


  private _collectionName = environment.PRODUCTS;

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

  getAllByType(type: string) {
    this._itemDocs = this._firestore.collection(this._collectionName, ref => ref.where("productType", "==", type).where("companyId", "==", this._settingService.settings?._id));
    this.items = this._itemDocs.valueChanges({ idField: '_id' });
  }


}
