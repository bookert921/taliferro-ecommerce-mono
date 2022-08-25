import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PendingHomeComponent } from './pending-home/pending-home.component';

const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Shopping Carts' } },
    { path: 'pending', component: PendingHomeComponent, data: { title: 'Pending Carts' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
})

export class CartsRoutingModule { }