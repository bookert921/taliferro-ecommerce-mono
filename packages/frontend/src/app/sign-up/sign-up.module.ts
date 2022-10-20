import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CustomerInfoComponent } from './customer-info/customer-info.component';



@NgModule({
  declarations: [
    CustomerInfoComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SharedModule
  ]
})
export class SignUpModule { }
