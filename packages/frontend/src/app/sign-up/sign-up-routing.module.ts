import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

const routes: Routes = [
    { path: '', component: CustomerInfoComponent, data: { title: 'Customer Sign Up' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class SignUpRoutingModule { }
  