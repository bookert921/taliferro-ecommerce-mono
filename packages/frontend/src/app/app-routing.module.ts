import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './home/not-found/not-found.component';
import { ThankYouComponent } from './home/thank-you/thank-you.component';
import { OverviewComponent } from './about/overview/overview.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path: '', component: OverviewComponent, data: { title: 'Overview' } },
  { path: 'thank-you', component: ThankYouComponent, data: { title: 'Thank You' } },
  { path: 'error', component: NotFoundComponent, data: { title: 'Error Found' } },
  { path: 'shop', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },
  { path: 'identity', loadChildren: () => import('./identity/identity.module').then(m => m.IdentityModule) },
  { path: 'activate', loadChildren: () => import('./activation/activation.module').then(m => m.ActivationModule), canLoad: [AuthGuard] },
  { path: 'my', loadChildren: () => import('./my/my.module').then(m => m.MyModule), canLoad: [AuthGuard] },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule), canLoad: [AuthGuard] },
  { path: 'carts', loadChildren: () => import('./carts/carts.module').then(m => m.CartsModule), canLoad: [AuthGuard] },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule), canLoad: [AuthGuard] },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), canLoad: [AuthGuard] },
  { path: 'admin', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule), canLoad: [AuthGuard] },
  { path: '**', component: NotFoundComponent, data: { title: 'Page Not Found' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
