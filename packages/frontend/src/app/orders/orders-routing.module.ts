import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReqListComponent } from './req-list/req-list.component';

const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Orders' } },
    { path: 'requisitions', component: ReqListComponent, data: { title: 'Requisitions' } },
    { path: ':id', component: HomeComponent, data: { title: 'Order' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
})

export class OrdersRoutingModule { }