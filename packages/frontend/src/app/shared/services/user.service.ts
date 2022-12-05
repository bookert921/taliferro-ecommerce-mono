import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import firebase from 'firebase/app';

import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { environment } from "../../../environments/environment";
import { IpService } from './ip.service';
import { Subscription } from 'rxjs';
import { IUser } from '../data/user.model';
import { AuthService } from './auth.service';
import { SettingService } from './setting.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

  private _itemDocs?: AngularFirestoreCollection;
  public items?: Observable<any[]>;

  private _refDocs?: AngularFirestoreCollection;
  public refDocs?: Observable<any[]>;


  private _collectionName: string = environment.USERS;
  private _ipSubscription?: Subscription;

  public userSubject = new Subject<IUser>();
  public user?: IUser;
  public ipAddress = '';
  public lastOrderID: any;
  public file?: string;
  public admin$ = new BehaviorSubject<Boolean>(false);
  public insurancePartner$ = new BehaviorSubject<Boolean>(false);
  public practitioner$ = new BehaviorSubject<Boolean>(false);
  public isPracFound: boolean = false;

  constructor(private _firestore: AngularFirestore, private _ipService: IpService, public authService: AuthService) {
    this.getIP();
    this.setUser();
  }


  ngOnDestroy(): void {
    if (this._ipSubscription)
      this._ipSubscription.unsubscribe();
  }


  private setUser(): void {
    this.authService.loggedInUser.subscribe((firebaseUser) => {

      if (firebaseUser && firebaseUser.email) {
        this.getUser()?.valueChanges({ idField: '_id' }).subscribe((u) => {
          if (!environment.production)
            console.log("UserService - User returned from subscribe", u);

          this.user = this.checkUserReturned(u, firebaseUser);
          this.userSubject.next(u);
          if (!environment.production)
            console.log("UserService - loggedInUser Fired", firebaseUser, "User", u);
        });
      }
      else {
        this.user = undefined;

        if (!environment.production)
          console.log("User Reset", this.user);
      };
    })
  }


  checkUserReturned(user: any, firebaseUser: firebase.User): IUser {
    if (user && (!user.email)) {
      if (!environment.production)
        console.log("INVALID FOUND USER - CREATE NEW USER");
      user = this.getNewUserRecordUsingFirebase(firebaseUser);
      this._firestore.collection(this._collectionName).doc(user._id).set(user, { merge: true });
    }
    return user;
  }

  public isAdmin(): boolean {
    if (this.user && this.user.roles) {
      return this.user.roles.includes("admin");
    }
    else return false;
  }


  setLoggedInUser(user: IUser): void {
    if (!environment.production)
      console.log('setLoggedInUser', user);

    this._firestore.collection(this._collectionName).doc(user._id).set(user, { merge: true });
    this.notifyListners(user);
  }

  notifyListners(user: IUser): void {
    this.user = user;
    this.userSubject.next(user);
  }


  getNewUser(uid: any, emailAdderess: string): IUser {
    return this.user = <IUser>{
      roles: ['reader'],
      email: emailAdderess,
    }
  }

  update(): void {
    if (this.user) {
      if (!environment.production)
        console.log("Updating User", this.user);
      this.user.lastUpdated = new Date().getTime();
      this.user.browserIp = this.ipAddress;
      this._firestore.collection(this._collectionName).doc(this.user._id).set(this.user, { merge: true });
    }
  }

  findUserCompany(customerId: any): void {
    this._refDocs = this._firestore.collection(this._collectionName, ref => ref.where("customerId", "==", customerId));
    this.refDocs = this._refDocs.valueChanges({ idField: '_id' });
  }


  get(ID: string) {
    return this._firestore.doc(this._collectionName + '/' + ID);
  }

  getUser() {
    return (this.authService.firebaseUser) ? this._firestore.doc(this._collectionName + '/' + this.authService.firebaseUser.uid) : null;
  }

  getAll() {
    this._itemDocs = this._firestore.collection(this._collectionName, ref => ref.where("companyId", "==", this.user?._id));
    this.items = this._itemDocs.valueChanges({ idField: '_id' });
  }


  create(data: any) {
    data.lastUpdated = new Date().getTime();
    data.browserIp = this.ipAddress;
    data.updatedBy = (this.authService.firebaseUser) ? this.authService.firebaseUser.email : '';
    if (this.authService.firebaseUser) {
      data.uid = this.authService.firebaseUser.uid;
      this._firestore.collection(this._collectionName).doc(data.uid).set(data, { merge: true });
    }
  }

  getAllByUserType(userType: string) {
    this._itemDocs = this._firestore.collection(this._collectionName, ref => ref.where("userType", "==", userType));
    this.items = this._itemDocs.valueChanges({ idField: '_id' });
  }


  private getIP() {
    this._ipSubscription = this._ipService.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
    })
  }


  getNewUserRecordUsingFirebase(firebaseUser: firebase.User): IUser {
    return <IUser>{
      email: firebaseUser.email,
      _id: firebaseUser.uid,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
      emailVerified: firebaseUser.emailVerified,
      phoneNumber: firebaseUser.phoneNumber,
    }
  }


}
