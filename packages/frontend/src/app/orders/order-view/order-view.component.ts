import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/shared/data/user.model';
import { ShoppingCart } from 'src/app/shared/data/shopping-cart.model';
import { OrderService } from 'src/app/shared/services/order.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  @Input() data: any;
  @Input() isDiagnostic: boolean = false;
  @Output() editItem = new EventEmitter();
  public isAdmin: boolean = false;

  constructor(private _orderService: OrderService, public userService: UserService, private _router:Router) { }

  ngOnInit(): void {
    this.userService.admin$.subscribe((result) => {
      this.isAdmin = result.valueOf();
    });
  }

  private setDataUp(): void {
    if (!this.data.user)
      this.data.user = <User>{};

    if (!this.data.cart)
      this.data.cart = <ShoppingCart>{};

  }

  setDiagnostic(): void {
    this.setDataUp();
    this.editItem.emit('diagnostic');
  }

  onStatus(): void {
    this.setDataUp();
    this.editItem.emit('status');
  }

  onName(): void {
    this.setDataUp();
    this.editItem.emit('name');
  }

  onAddress(): void {
    this.setDataUp();
    this.editItem.emit('address');
  }

  onDob(): void {
    this.setDataUp();
    this.editItem.emit('dob');
  }

  onLIS(): void {
    this.setDataUp();
    this.editItem.emit('lis');
  }

  onEmail(): void {
    this.setDataUp();
    this.editItem.emit('email');
  }

  onGender(): void {
    this.setDataUp();
    this.editItem.emit('gender');
  }

  onKitNumber(): void {
    this.setDataUp();
    this.editItem.emit('kitNumber');
  }

  onNationality(): void {
    this.setDataUp();
    this.editItem.emit('nationality')
  }

  onVaccinated(): void {
    this.setDataUp();
    this.editItem.emit('vaccinated')
  }

  onPassportNumber(): void {
    this.setDataUp();
    this.editItem.emit('passportNumber');
  }

  onInsurance(): void {
    this.setDataUp();
    this.editItem.emit('insurance');
  }

  onSsn(): void {
    this.setDataUp();
    this.editItem.emit('ssn')
  }

  onPhone(): void {
    this.setDataUp();
    this.editItem.emit('phone');
  }

  onDelete(): void {
    this._orderService.delete(this.data._id);
    this._router.navigate(['orders']);
  }

}
