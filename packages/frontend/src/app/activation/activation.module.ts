import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivationRoutingModule } from './activation-routing.module';

import { SharedModule } from '../shared/shared.module';

import { KitActivationComponent } from './kit-activation/kit-activation.component';
import { SampleCollectionTimeEditComponent } from './sample-collection-time-edit/sample-collection-time-edit.component';
import { EmailEditComponent } from './email-edit/email-edit.component';
import { LabOrderSummaryComponent } from './lab-order-summary/lab-order-summary.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { DobEditComponent } from './dob-edit/dob-edit.component';
import { GenderEditComponent } from './gender-edit/gender-edit.component';
import { NameEditComponent } from './name-edit/name-edit.component';
import { PhoneEditComponent } from './phone-edit/phone-edit.component';
import { ActivationCompleteComponent } from './activation-complete/activation-complete.component';
import { KitNumberEditComponent } from './kit-number-edit/kit-number-edit.component';
@NgModule({
  declarations: [
    KitActivationComponent,
    SampleCollectionTimeEditComponent,
    EmailEditComponent,
    LabOrderSummaryComponent,
    AddressEditComponent,
    DobEditComponent,
    GenderEditComponent,
    NameEditComponent,
    PhoneEditComponent,
    ActivationCompleteComponent,
    KitNumberEditComponent
  ],
  imports: [
    CommonModule,
    ActivationRoutingModule,
    SharedModule
  ]
})
export class ActivationModule { }
