import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { environment as env } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerifyComponent } from './home/verify/verify.component';
import { NotFoundComponent } from './home/not-found/not-found.component';


import { AppointmentService } from './shared/services/appointment.service';
import { AuthService } from './shared/services/auth.service';
import { CartService } from './shared/services/cart.service';
import { CategoryService } from './shared/services/category.service';
import { CheckoutService } from './shared/services/checkout.service';
import { ColorsService } from './shared/services/colors.service';
import { CustomerService } from './shared/services/customer.service';
import { DailyReportService } from './shared/services/daily-report.service';
import { DataService } from './shared/services/data.service';
import { DependencyCodeService } from './shared/services/dependency-code.service';
import { ExtCalService } from './shared/services/ext-cal.service';
import { IpService } from './shared/services/ip.service';
import { LabOrderService } from './shared/services/lab-order.service';
import { LisPractitionersService } from './shared/services/lis-practitioners.service';
import { OrderService } from './shared/services/order.service';
import { PaymentService } from './shared/services/payment.service';
import { ProductService } from './shared/services/product.service';
import { ProductTypeService } from './shared/services/product-type.service';
import { SettingService } from './shared/services/setting.service';
import { SubCategoryService } from './shared/services/sub-category.service';
import { TestKitService } from './shared/services/test-kit.service';
import { UserService } from './shared/services/user.service';
import { StoreService } from './shared/services/store.service';
import { ThankYouComponent } from './home/thank-you/thank-you.component';
import { OverviewComponent } from './about/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    VerifyComponent,
    NotFoundComponent,
    ThankYouComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [AuthService, StoreService, AppointmentService, CheckoutService, DailyReportService, ProductTypeService, ExtCalService, LisPractitionersService, SubCategoryService, DependencyCodeService, CustomerService, ColorsService, DataService, IpService, LabOrderService, OrderService, PaymentService, ProductService, SettingService, TestKitService, UserService, CartService, CategoryService],
  bootstrap: [AppComponent]
})

export class AppModule { }
