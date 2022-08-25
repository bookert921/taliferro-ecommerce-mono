import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';

import { HomeComponent } from './home/home.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerEditNameComponent } from './customer-edit-name/customer-edit-name.component';
import { CustomerEditTitleComponent } from './customer-edit-title/customer-edit-title.component';
import { CustomerEditReferredComponent } from './customer-edit-referred/customer-edit-referred.component';
import { CustomerEditMarketingComponent } from './customer-edit-marketing/customer-edit-marketing.component';
import { CustomerEditPersonalComponent } from './customer-edit-personal/customer-edit-personal.component';
import { CustomerEditCreditComponent } from './customer-edit-credit/customer-edit-credit.component';
import { CustomerEditGenderComponent } from './customer-edit-gender/customer-edit-gender.component';
import { CustomerEditDobComponent } from './customer-edit-dob/customer-edit-dob.component';



@NgModule({
  declarations: [HomeComponent, CustomerListComponent, CustomerViewComponent,
    CustomerEditNameComponent,
    CustomerEditTitleComponent,
    CustomerEditReferredComponent,
    CustomerEditMarketingComponent,
    CustomerEditPersonalComponent,
    CustomerEditCreditComponent,
    CustomerEditGenderComponent,
    CustomerEditDobComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
