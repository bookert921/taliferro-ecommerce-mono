import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyRoutingModule } from './my-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { LabOrdersComponent } from './lab-orders/lab-orders.component';
import { PaymentsComponent } from './payments/payments.component';
import { HomeComponent } from './home/home.component';

import { AddressComponent } from './profile/address/address.component';
import { CcInfoComponent } from './profile/cc-info/cc-info.component';
import { DobComponent } from './profile/dob/dob.component';
import { GenderComponent } from './profile/gender/gender.component';
import { UserNameComponent } from './profile/name/name.component';
import { OrderHistoryComponent } from './profile/order-history/order-history.component';
import { TestHistoryComponent } from './profile/test-history/test-history.component';
import { PhoneComponent } from './profile/phone/phone.component';
import { EmailComponent } from './profile/email/email.component';
import { MyCompanyComponent } from './profile/my-company/my-company.component';
import { OrderViewComponent } from './orders/order-view/order-view.component';
import { PracticeComponent } from './profile/practice/practice.component';
import { LabOrderViewComponent } from './lab-orders/lab-order-view/lab-order-view.component';
import { LabOrderResultsComponent } from './lab-orders/lab-order-results/lab-order-results.component';

@NgModule({
  declarations: [
    ProfileComponent,
    OrdersComponent,
    LabOrdersComponent,
    PaymentsComponent,
    HomeComponent,
    AddressComponent,
    CcInfoComponent,
    DobComponent,
    GenderComponent,
    UserNameComponent,
    OrderHistoryComponent,
    TestHistoryComponent,
    PhoneComponent,
    EmailComponent,
    MyCompanyComponent,
    OrderViewComponent,
    PracticeComponent,
    LabOrderViewComponent,
    LabOrderResultsComponent,
  ],
  imports: [
    CommonModule,
    MyRoutingModule,
    SharedModule

  ]
})
export class MyModule { }
