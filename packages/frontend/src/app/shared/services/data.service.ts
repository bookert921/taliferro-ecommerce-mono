import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IpService } from './ip.service';
import { Subscription } from 'rxjs';
import { environment } from "../../../environments/environment";
import { AuthService } from './auth.service';
import { SettingService } from './setting.service';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy {

  private _itemDocs?: AngularFirestoreCollection;
  public items?: Observable<any[]>;

  private _itemDoc?: AngularFirestoreDocument<any>;
  public item?: Observable<any>;


  private _ipSubscription?: Subscription;

  public ipAddress = '';


  constructor( private _firestore: AngularFirestore, private _ipService: IpService, private _authService: AuthService, private _settingService: SettingService, private _userService: UserService) {
    this.getIP();
  }

  public ngOnDestroy(): void {
    if (this._ipSubscription)
      this._ipSubscription.unsubscribe();
  }


  getAll(collectionName: string) {
    try {
      if (!environment.production)
        console.log("Getting all ", collectionName);

      this._itemDocs = this._firestore.collection(collectionName, ref => ref.where("companyId", "==", this._settingService.settings._id));
      this.items = this._itemDocs.valueChanges({ idField: '_id' });
    } catch (error) {
      console.error("Error On", collectionName, "Settings", this._settingService.settings);
    }
  }

  getAllByEmail(collectionName: string, email: string) {
    this._itemDocs = this._firestore.collection(collectionName, ref => ref.where("email", "==", email));
    this.items = this._itemDocs.valueChanges({ idField: '_id' });
  }

  delete(collectionName: string, id: string) {
    this._firestore.collection(collectionName).doc(id).delete();
  }

  updateByUID(collectionName: string, data: any) {
    data.lastUpdated = new Date().getTime();
    data.companyId = this._settingService.settings._id;
    data.browserIp = this.ipAddress;
    data.updatedBy = (this._authService.firebaseUser) ? this._authService.firebaseUser.email : '';
    if (this._authService.firebaseUser) {
      data.uid = this._authService.firebaseUser?.uid;
      this._firestore.collection(collectionName).doc(data.uid).set(data, { merge: true });
    }
  }

  update(collectionName: string, id: string, data: any) {
    data.lastUpdated = new Date().getTime();
    data.companyId = this._settingService.settings._id;
    data.updatedBy = (this._authService.firebaseUser) ? this._authService.firebaseUser.email : '';
    data.browserIp = this.ipAddress;
    // if (!environment.production)
    //   console.log("UPDATING THIS RECORD", collectionName, id, JSON.stringify(data, null, 2));

    this._firestore.collection(collectionName).doc(id).set(data, { merge: true });
  }

  add(collectionName: string, data: any) {
    data.lastUpdated = new Date().getTime();
    data.createdAt = new Date().getTime();
    data.companyId = this._settingService.settings._id;
    data.updatedBy = (this._authService.firebaseUser) ? this._authService.firebaseUser.email : '';
    data.browserIp = this.ipAddress;

    return this._firestore.collection(collectionName).add(data);
  }



  addRecordReturnKey(collectionName: string, data: any) {
    data.lastUpdated = new Date().getTime();
    data.createdAt = new Date().getTime();
    data.companyId = this._settingService.settings._id;
    if (this._authService.firebaseUser)
      data.updatedBy = this._authService.firebaseUser.email;
    data.browserIp = this.ipAddress;

    const id = this._firestore.createId();
    // if (!environment.production)
    //   console.log("ADDING THIS RECORD", collectionName, id, JSON.stringify(data, null, 2));

    this._firestore.collection(collectionName).doc(id).set(data);
    return id;
  }

  get(collectionName: string, id: string) {
    this._itemDoc = this._firestore.doc<any>(collectionName + '/' + id);
    this.item = this._itemDoc.valueChanges({ idField: '_id' });
  }

  getRecord(collectionName: string, id: string) : Observable<any> {
    return this._firestore.doc<any>(collectionName + '/' + id).valueChanges({ idField: '_id' });
  }

  getByTitle(collectionName: string, title: string) {
    return this._firestore.collection(collectionName, ref => ref.where('title', '==', title).where("companyId", "==", this._settingService.settings._id)).get();
  }

  getByLastUpdated(collectionName: string) {
    this._itemDocs = this._firestore.collection(collectionName, ref => ref.orderBy('lastUpdated', "desc").where("companyId", "==", this._settingService.settings._id));
    this.items = this._itemDocs.valueChanges({ idField: '_id' });
  }

  getAllByNotThis(collectionName: string, fieldName: string, notThisValue: string) {
    this._itemDocs = this._firestore.collection(collectionName, ref => ref.where(fieldName, "!=", notThisValue).where("companyId", "==", this._settingService.settings._id));
    this.items = this._itemDocs.valueChanges({ idField: '_id' });
  }

  searchCurrentByStatus(status: any) {
    this.items = this._itemDocs?.valueChanges({ idField: '_id' }).pipe(
      map(items => {
        return items.filter(item => { return (item.status == status) || (item.status == Number(status)) })
      })
    );
  }

  private getIP() {
    this._ipSubscription = this._ipService.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
    })
  }


}
