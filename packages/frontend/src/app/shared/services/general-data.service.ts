import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IpService } from './ip.service';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { SettingService } from './setting.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralDataService implements OnDestroy {
  protected _itemDoc?: AngularFirestoreDocument<any>;
  public item?: Observable<any>;

  protected _itemDocs?: AngularFirestoreCollection;
  public items?: Observable<any[]>;
  private _ipSubscription?: Subscription;
  public ipAddress = '';

  constructor(protected _firestore: AngularFirestore, private _ipService: IpService, protected _authService: AuthService, protected _userService: UserService, protected _settingService: SettingService) { 
    this.getIP();
  }

  ngOnDestroy() : void {
    if (this._ipSubscription)
      this._ipSubscription.unsubscribe();
  }



  get(ID: string, collectionName: string) {
    return this._firestore.doc(collectionName + '/' + ID);
  }

  getAll(collectionName: string) {
    this._itemDocs = this._firestore.collection(collectionName, ref => ref.where("companyId", "==", this._settingService.settings._id));
    this.items = this._itemDocs.valueChanges({ idField: '_id' });
  }

  create(data: any, collectionName: string) {
    data.createdAt = new Date().getTime();
    data.lastUpdated = new Date().getTime();
    data.companyId = this._settingService.settings._id;
    data.browserIp = this.ipAddress;
    data.updatedBy = (this._authService.firebaseUser) ? this._authService.firebaseUser.email : '';
    return this._firestore.collection(collectionName).add(data);
  }

  delete(id: string, collectionName: string) {
    this._firestore.collection(collectionName).doc(id).delete();
  }

  private getIP() {
    this._ipSubscription = this._ipService.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
    })
  }

}
