import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CartsRoutingModule } from './carts-routing.module';
import { CartViewComponent } from './cart-view/cart-view.component';
import { SavedCartsListComponent } from './saved-carts-list/saved-carts-list.component';
import { PendingHomeComponent } from './pending-home/pending-home.component';

@NgModule({
  declarations: [
    CartListComponent,
    HomeComponent,
    CartViewComponent,
    SavedCartsListComponent,
    PendingHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CartsRoutingModule
  ]
})
export class CartsModule { }
