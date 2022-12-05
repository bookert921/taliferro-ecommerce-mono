import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IpService } from './ip.service';
import { Subscription } from 'rxjs';
import { IShoppingCart } from '../data/shopping-cart.model';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Contact } from '../data/contact.model';
import { EmailAddress } from '../data/email-address.model';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnDestroy {

  private _itemDocs?: AngularFirestoreCollection;
  public items?: Observable<any[]>;
  public production: boolean = false;
  private _collectionName: string = environment.CARTS;
  private _ipSubscription?: Subscription;
  public savedCartID: any;

  public cart: IShoppingCart = <IShoppingCart>{
    lineItems: [],
    contact: undefined,
    amount: 0,
    tax: 0,
  };

  public ipAddress = '';

  constructor(private _firestore: AngularFirestore, private _ipService: IpService, public userService: UserService) {

    this.getIP();

  }


  public ngOnDestroy(): void {
    if (this._ipSubscription)
      this._ipSubscription.unsubscribe();
  }

  public reset(): void {
    this.cart = <IShoppingCart>{
      lineItems: [],
      shippingRequired: true,
      tax: 0,
      status: '',
      gateway: '',
      fulfillmentStatus: '',
      financialStatus: '',
      discounts: '',
      deliveryTime: '',
      uid: '',
      amount: 0
    };

  }

  get(ID: string) {
    return this._firestore.doc(this._collectionName + '/' + ID)
  }

  getAll() {
    this._itemDocs = this._firestore.collection(this._collectionName);
    this.items = this._itemDocs.valueChanges({ idField: '_id' });
  }

  getAllPracSavedCarts(pracID: string) {
    this._itemDocs = this._firestore.collection(environment.SAVED_CARTS, ref => ref.where("customerId", "==", pracID));
    this.items = this._itemDocs.valueChanges({ idField: '_id' });
  }

  getAllSavedCarts() {
    this._itemDocs = this._firestore.collection(environment.SAVED_CARTS);
    this.items = this._itemDocs.valueChanges({ idField: '_id' });
  }

  getSavedCart(id: string) {
    return this._firestore.doc(environment.SAVED_CARTS + '/' + id).valueChanges({ idField: '_id' });
  }

  getSavedCartFromEmail(email: string) {
    return this._firestore.collection(environment.SAVED_CARTS, ref => ref.where("email", "==", email)).valueChanges({ idField: '_id' });
  }


  saveTempCart(storeId: any) {
    this.cart.browserIp = this.ipAddress;
    this.cart.createdAt = new Date().getTime();
    this.cart.environment = environment.firebaseConfig.projectId;
    this.cart.storeId = storeId;
    this.cart.companyId = storeId;

    // this._firestore.collection(environment.SAVED_CARTS).doc(email).set(this.cart);
    if (this.cart._id) {
      if (!environment.production)
        console.log("Updating temp cart")
      this._firestore.collection(environment.SAVED_CARTS).doc(this.cart._id).set(this.cart);
      window.localStorage.setItem('tempCart', this.cart._id);

    } else {
      if (!environment.production)
        console.log("Saving new temp cart")
      this._firestore.collection(environment.SAVED_CARTS).add(this.cart).then((result) => {
        this.cart._id = result.id;
        window.localStorage.setItem('tempCart', this.cart._id);
      });
    }

  }

  delete(id: string) {
    this._firestore.collection(environment.SAVED_CARTS).doc(id).delete();
  }


  saveCart(storeId: any) {
    this.cart.browserIp = this.ipAddress;
    this.cart.createdAt = new Date().getTime();
    this.cart.environment = environment.firebaseConfig.projectId;
    this.cart.storeId = storeId;
    this.cart.companyId = storeId;

    if (!environment.production)
      console.log("Cart User", this.userService.authService.firebaseUser)
    if (this.userService.authService.firebaseUser) {
      this.cart.uid = this.userService.authService.firebaseUser.uid;
      this._firestore.collection(environment.SAVED_CARTS).doc(this.cart.uid).set(this.cart, { merge: true });
    }
  }

  create(data: any) {
    data.browserIp = this.ipAddress;
    data.createdAt = new Date().getTime();


    if (this.userService.authService.firebaseUser)
      data.uid = this.userService.authService.firebaseUser.uid;
    return this._firestore.collection(this._collectionName).add(data);
  }

  private getIP() {
    this._ipSubscription = this._ipService.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
    })
  }



}
