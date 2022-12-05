import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { YourStoreUnderConstructionComponent } from './your-store-under-construction/your-store-under-construction.component';
import { SetupRequiredComponent } from './setup-required/setup-required.component';
import { StoreResolver } from './store.resolver';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    { path: '', component: ErrorComponent, data: { title: 'Unknown Store' } },
    { path: ':id', component: PageComponent, data: { title: 'Store Home' }, resolve: { setting: StoreResolver } },
    { path: 'store-under-construction', component: YourStoreUnderConstructionComponent, data: { title: 'Store Under Construction' } },
    { path: 'setup-required', component: SetupRequiredComponent, data: { title: 'Setup Required' } },
    { path: 'under-construction', component: UnderConstructionComponent, data: { title: 'Under Construction' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        StoreResolver
    ]
})

export class StoreRoutingModule { }
