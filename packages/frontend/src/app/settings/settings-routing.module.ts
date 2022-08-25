import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminStartComponent } from './admin-start/admin-start.component';
import { ActivatedKitLabOrderPairingComponent } from './activated-kit-lab-order-pairing/activated-kit-lab-order-pairing.component';
import { FirstSignInComponent } from './admin-start/first-sign-in/first-sign-in.component';
import { CreateAccountComponent } from './admin-start/create-account/create-account.component';

const routes: Routes = [
    { path: '', component: AdminStartComponent, data: { title: 'Administration' } },
    { path: 'settings', component: HomeComponent, data: { title: 'Settings' } },
    { path: 'sign-in-first', component: FirstSignInComponent, data: { title: 'Sign In First' } },
    { path: 'create-account', component: CreateAccountComponent, data: { title: 'Create Account' } },
    { path: 'activated-kit-pairing', component: ActivatedKitLabOrderPairingComponent, data: { title: 'Activated Kits and Lab Order Pairing' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
})

export class SettingsRoutingModule { }