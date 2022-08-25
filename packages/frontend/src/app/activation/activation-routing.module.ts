import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitActivationComponent } from './kit-activation/kit-activation.component';

const routes: Routes = [
    { path: '', component: KitActivationComponent, data: { title: 'Test Kit Activation' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
})

export class ActivationRoutingModule { }