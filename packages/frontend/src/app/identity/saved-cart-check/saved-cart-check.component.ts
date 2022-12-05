import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { CartService } from 'src/app/shared/services/cart.service';
import { ShoppingCart } from 'src/app/shared/data/shopping-cart.model';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { User } from 'src/app/shared/data/user.model';

@Component({
  selector: 'app-saved-cart-check',
  templateUrl: './saved-cart-check.component.html',
  styleUrls: ['./saved-cart-check.component.css']
})
export class SavedCartCheckComponent implements OnInit, OnDestroy {

  private _userSubscription?: Subscription;
  private _dataSubscription?: Subscription;
  private _cartSubscription?: Subscription;
  public emailAddress: any;
  public kitNumber: any;
  public url: any;
  public idMismatch: boolean = false;
  public isRelogin: boolean = false;
  private _cart?: any;
  public production: boolean;
  public errorMessage: any;

  constructor(private _router: Router, public authService: AuthService, private _userService: UserService, private _dataService: DataService, private _cartService: CartService, public colorService: ColorsService) {
    this.production = environment.production;
  }

  ngOnInit(): void {
    this.url = this._router.url;
    this.checkTheEmail();
  }

  ngOnDestroy(): void {
    if (this._userSubscription)
      this._userSubscription.unsubscribe();
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
    if (this._cartSubscription)
      this._cartSubscription.unsubscribe();
  }

  private async checkTheEmail() {
    const email = window.localStorage.getItem('emailForSignIn');
    window.localStorage.removeItem('emailForSignIn');

    if (!this.production)
      console.log("Email from Storage", email);

    this.processEmailAddress(email);
  }

  public onSubmit() {
    try {
      this.processEmailAddress(this.emailAddress);
    } catch (error) {
      console.error(error);
    }
  }


  processEmailAddress(email: any) {
    if (email)
      this.beginLoginWithEmail(email, this.url);
    else
      this.isRelogin = true;

  }

  private async beginLoginWithEmail(email: any, url: any) {
    let loginOK = await this.authService.confirmSignIn(email, url);

    const isLoginOK: boolean = (loginOK == 'true');

    if (!this.production)
      console.log("Login OK", isLoginOK)

    if (isLoginOK) {
      this.associateFirebaseAndUser(email);
    } else {
      this.isRelogin = true;
    }
    this.emailAddress = null;
    this.kitNumber = null;
    this.idMismatch = false;
  }

  private async associateFirebaseAndUser(email: any) {
    if (this.authService.firebaseUser) {
      this._cart = await this.lookForSavedCart(email);
      let idOfSavedCart = (this._cart && this._cart._id) ? this._cart._id : undefined;

      let user = await this.getUserRecord(this.authService.getFirestoreUser()?.uid, email);
      this._userService.create(user);
      this._userService.user = <User>user;

      if (!this.production)
        console.log("User Checked", user, "Cart Check", this._cart, "Cart ID", idOfSavedCart);

      this.processShoppingCart(idOfSavedCart);
      this.proceed(user);
    } else {
      this._router.navigate(['access']);
    }
  }

  private async lookForSavedCart(email: string) {
    return new Promise((resolve, reject) => {
      //tempCart
      const tempCart = window.localStorage.getItem('tempCart');
      window.localStorage.removeItem('tempCart');

      if (!this.production)
        console.log("getSavedCartFromEmail", tempCart, email);

      if (tempCart) {
        this._cartSubscription = this._cartService.getSavedCart(tempCart).subscribe((cart: any) => {
          if (!this.production)
            console.log("Saved Cart Check", cart);

          resolve(cart);
        })

      }
      else {
        resolve(null);
      }
    })
  }

  private processShoppingCart(id: string): void {
    if (this._cart) {
      if (!environment.production)
        console.log("processShoppingCart", id);

      this._cart.status = "Submitted";
      this._userService.lastOrderID = this._dataService.addRecordReturnKey(environment.CARTS, this._cart);

      if (!environment.production)
        console.log("lastOrderID", this._userService.lastOrderID);

      if (id) {
        if (!this.production)
          console.log("Delete Saved Cart", id);

        this._dataService.delete(environment.SAVED_CARTS, id);
      }

      if (!this.production)
        console.log("Cart Saved", this._cart, "Cart Deleted", id);
    } else {
      console.error("No Cart Found", this._cart)
    }
  }

  private async getUserRecord(uid: any, email: any) {
    return new Promise((resolve, reject) => {
      if (this._userService.user) {
        this.moveFromCartToUser(this._userService.user);
        resolve(this._userService.user);
      } else {
        this._dataService.get(environment.USERS, uid);
        this._dataSubscription = this._dataService.item?.subscribe((u: any) => {
          if (u && u._id && u.email) {
            if (!this.production)
              console.log("A user record was found in the database", u);
            this.moveFromCartToUser(u);
            this._userService.user = u;
            resolve(u);
          }
          else {
            if (!this.production)
              console.log("A user record WAS NOT found in the database", u);
            resolve(this.newUser(uid, email));
          }
        })
      }
    })
  }

  private newUser(uid: any, email: any): any {
    let newUser = this._userService.getNewUser(uid, email);
    this.moveFromCartToUser(newUser);
    return newUser;
  }

  private moveFromCartToUser(user: any) {
    try {
      let cid = (this.authService.firebaseUser && this.authService.firebaseUser.uid) ? this.authService.firebaseUser.uid : '';
      if (this._cart) {
        user.firstName = (this._cart.contact.firstName) ? this._cart.contact.firstName : '';
        user.lastName = (this._cart.contact.lastName) ? this._cart.contact.lastName : '';
        user.contactId = (this._cart.contact._id) ? this._cart.contact._id : '';

      }
    } catch (error) {
      if (!environment.production)
        console.error(error, "moveToCart", user);
      this.errorMessage = error;
    }
  }

  private proceed(user: any): void {
    if (user && user.roles) {
      this.proceedByRole(user);
    } else {
      this._router.navigate(['my']);
    }
  }

  private proceedByRole(user: any): void {
    if (user.roles.includes("admin"))
      this._router.navigate(['admin']);
    else if (user.roles.includes("reader"))
      this._router.navigate(['my']);
    else
      this._router.navigate(['my']);
  }


}
