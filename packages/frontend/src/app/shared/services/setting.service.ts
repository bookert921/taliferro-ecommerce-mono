import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IpService } from './ip.service';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class SettingService implements OnDestroy {

  public settings: any;
  protected _itemDoc?: AngularFirestoreDocument<any>;
  public item?: Observable<any>;

  protected _itemDocs?: AngularFirestoreCollection;
  public items?: Observable<any[]>;
  protected _collectionName;
  private _ipSubscription?: Subscription;
  public ipAddress = '';

  constructor(protected _firestore: AngularFirestore, private _ipService: IpService, protected _authService: AuthService, protected _userService: UserService) {
    this._collectionName = environment.SETTINGS;
    this.getIP();
  }

  ngOnDestroy(): void {
    if (this._ipSubscription)
      this._ipSubscription.unsubscribe();
  }

  getAll() {
    try {
      if (!environment.production)
        console.log("Getting all ", this._collectionName);

      this._itemDocs = this._firestore.collection(this._collectionName);
      this.items = this._itemDocs.valueChanges({ idField: '_id' });
    } catch (error) {
      console.error("Error On", this._collectionName);
    }

  }

  userStoreSettings(): void {
    if (!environment.production)
      console.info("setSettings", this._userService.user?.companyId);

    if (this._userService.user && this._userService.user.companyId)
      this.setSettings(this._userService.user.companyId);
  }

  retrieveSettings(id: any): void {
    if (id)
      this.setSettings(id);
    else
      console.error("INVALID STORE PASSED");
  }

  private setSettings(id: string): void {
    this._itemDoc = this._firestore.doc<any>(this._collectionName + '/' + id);
    this.item = this._itemDoc.valueChanges({ idField: '_id' });
  }

  private findDefault() {
    if (!environment.production)
      console.info("getAll", this._collectionName);

    this._itemDocs = this._firestore.collection(this._collectionName);
    this.items = this._itemDocs.valueChanges({ idField: '_id' });

    this.items.subscribe((data) => {
      if (data && data.length && (data.length > 0)) {
        this.settings = data[0];
      }
    })
  }

  newStoreSetting(data: any): string {
    data.createdAt = new Date().getTime();
    data.lastUpdated = new Date().getTime();
    if (this._authService.firebaseUser) {
      data.uid = this._authService.firebaseUser.uid;
      data.updatedBy = (this._authService.firebaseUser.email) ? this._authService.firebaseUser.email : '';
    }

    const id = this._firestore.createId();
    this._firestore.collection(this._collectionName).doc(id).set(data);
    return id;
  }


  delete(id: string) {
    this._firestore.collection(this._collectionName).doc(id).delete();
  }

  private getIP() {
    this._ipSubscription = this._ipService.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
    })
  }

}
