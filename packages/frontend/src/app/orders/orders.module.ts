import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { HomeComponent } from './home/home.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { AppointmentPrintListComponent } from './appointment-print-list/appointment-print-list.component';
import { ReqListComponent } from './req-list/req-list.component';
import { OrderEditAddressComponent } from './order-edit-address/order-edit-address.component';
import { OrderEditGenderComponent } from './order-edit-gender/order-edit-gender.component';
import { OrderEditNameComponent } from './order-edit-name/order-edit-name.component';
import { OrderEditEmailComponent } from './order-edit-email/order-edit-email.component';
import { OrderEditDobComponent } from './order-edit-dob/order-edit-dob.component';
import { OrderEditKitNumberComponent } from './order-edit-kit-number/order-edit-kit-number.component';
import { OrderEditPassportNumberComponent } from './order-edit-passport-number/order-edit-passport-number.component';
import { OrderEditNationalityComponent } from './order-edit-nationality/order-edit-nationality.component';
import { OrderEditInsuranceComponent } from './order-edit-insurance/order-edit-insurance.component';
import { OrderEditPhoneNumberComponent } from './order-edit-phone-number/order-edit-phone-number.component';
import { OrderEditSsnComponent } from './order-edit-ssn/order-edit-ssn.component';
import { OrderEditVaccinatedComponent } from './order-edit-vaccinated/order-edit-vaccinated.component';
import { OrderEditStatusComponent } from './order-edit-status/order-edit-status.component';
import { OrderEditLisNumberComponent } from './order-edit-lis-number/order-edit-lis-number.component';

@NgModule({
  declarations: [
    HomeComponent,
    OrderListComponent,
    OrderViewComponent,
    AppointmentPrintListComponent,
    ReqListComponent,
    OrderEditAddressComponent,
    OrderEditGenderComponent,
    OrderEditNameComponent,
    OrderEditEmailComponent,
    OrderEditDobComponent,
    OrderEditKitNumberComponent,
    OrderEditPassportNumberComponent,
    OrderEditNationalityComponent,
    OrderEditInsuranceComponent,
    OrderEditPhoneNumberComponent,
    OrderEditSsnComponent,
    OrderEditVaccinatedComponent,
    OrderEditStatusComponent,
    OrderEditLisNumberComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
