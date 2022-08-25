import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { LabOrdersComponent } from './lab-orders/lab-orders.component';
import { LabOrderResultsComponent } from './lab-orders/lab-order-results/lab-order-results.component';
import { PaymentsComponent } from './payments/payments.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Welcome' } },
    { path: 'profile', component: ProfileComponent, data: { title: 'My Profile' } },
    { path: 'orders', component: OrdersComponent, data: { title: 'My Orders' } },
    { path: 'lab-orders', component: LabOrdersComponent, data: { title: 'My Lab Tests' } },
    { path: 'lab-order-results', component: LabOrderResultsComponent, data: { title: 'Lab Results' } },
    { path: 'payments', component: PaymentsComponent, data: { title: 'My Billing' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
})

export class MyRoutingModule { }