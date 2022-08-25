import { Injectable, OnInit } from '@angular/core';
import { GeneralDataService } from './general-data.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends GeneralDataService  {

  private _collectionName = environment.APPOINTMENTS;

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

  getAllByDate(appointmentDate: string) {
    this._itemDocs = this._firestore.collection(this._collectionName, ref => ref.where("appointment.date", "==", appointmentDate).where("companyId", "==", this._settingService.settings._id));
    this.items = this._itemDocs.valueChanges({ idField: '_id' });
  }

  getAllByEmail(email: string) {
    this._itemDocs = this._firestore.collection(this._collectionName, ref => ref.where("email", "==", email).where("companyId", "==", this._settingService.settings._id));
    this.items = this._itemDocs.valueChanges({ idField: '_id' });
  }


}
