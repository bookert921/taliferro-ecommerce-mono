import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { LogoComponent } from './company/logo/logo.component';
import { CompanyNameComponent } from './company/name/name.component';
import { UserNameComponent } from './user/name/name.component';
import { AddressComponent } from './user/address/address.component';
import { DobComponent } from './user/dob/dob.component';
import { GenderComponent } from './user/gender/gender.component';
import { CcInfoComponent } from './user/cc-info/cc-info.component';
import { ColorsComponent } from './company/colors/colors.component';
import { CompanyPhoneComponent } from './company/company-phone/company-phone.component';
import { CompanyEmailComponent } from './company/company-email/company-email.component';
import { CompanyTitleComponent } from './company/company-title/company-title.component';
import { CompanyDescriptionComponent } from './company/company-description/company-description.component';
import { CompanyAboutComponent } from './company/company-about/company-about.component';
import { AdminStartComponent } from './admin-start/admin-start.component';
import { OrderButtonTextComponent } from './company/order-button-text/order-button-text.component';
import { CompanySectionsComponent } from './company/company-sections/company-sections.component';
import { SocialComponent } from './company/social/social.component';
import { OrderHistoryComponent } from './user/order-history/order-history.component';
import { TestHistoryComponent } from './user/test-history/test-history.component';
import { CompanyImageComponent } from './company/company-image/company-image.component';
import { SiteTypeComponent } from './company/site-type/site-type.component';
import { UserPhoneNumberComponent } from './user/user-phone-number/user-phone-number.component';
import { UserEmailComponent } from './user/user-email/user-email.component';
import { CompanyComponent } from './user/company/company.component';
import { ActivatedKitLabOrderPairingComponent } from './activated-kit-lab-order-pairing/activated-kit-lab-order-pairing.component';
import { AboutProduct1EditComponent } from './company/page-widgets/about-product1-edit/about-product1-edit.component';
import { AboutProduct2EditComponent } from './company/page-widgets/about-product2-edit/about-product2-edit.component';
import { AboutProduct3EditComponent } from './company/page-widgets/about-product3-edit/about-product3-edit.component';
import { Faq1EditComponent } from './company/page-widgets/faq1-edit/faq1-edit.component';
import { Faq2EditComponent } from './company/page-widgets/faq2-edit/faq2-edit.component';
import { Faq3EditComponent } from './company/page-widgets/faq3-edit/faq3-edit.component';
import { Features1EditComponent } from './company/page-widgets/features1-edit/features1-edit.component';
import { Features2EditComponent } from './company/page-widgets/features2-edit/features2-edit.component';
import { Features3EditComponent } from './company/page-widgets/features3-edit/features3-edit.component';
import { Features4EditComponent } from './company/page-widgets/features4-edit/features4-edit.component';
import { Video1EditComponent } from './company/page-widgets/video1-edit/video1-edit.component';
import { Video2EditComponent } from './company/page-widgets/video2-edit/video2-edit.component';
import { HowTo1Component } from './company/page-widgets/how-to1/how-to1.component';
import { CategoriesComponent } from './company/dropdown/categories/category-list/categories.component';
import { CategoryEditComponent } from './company/dropdown/categories/category-edit/category-edit.component';
import { ProductTypeEditComponent } from './company/dropdown/product-type/product-type-edit/product-type-edit.component';
import { ProductTypeListComponent } from './company/dropdown/product-type/product-type-list/product-type-list.component';
import { StripeComponent } from './company/stripe/stripe.component';
import { SubCategoryEditComponent } from './company/dropdown/sub-category/sub-category-edit/sub-category-edit.component';
import { SubCategoryListComponent } from './company/dropdown/sub-category/sub-category-list/sub-category-list.component';
import { ProductDependencyEditComponent } from './company/dropdown/product-dependency/product-dependency-edit/product-dependency-edit.component';
import { ProductDependencyListComponent } from './company/dropdown/product-dependency/product-dependency-list/product-dependency-list.component';
import { FirstSignInComponent } from './admin-start/first-sign-in/first-sign-in.component';
import { CreateAccountComponent } from './admin-start/create-account/create-account.component';

@NgModule({
  declarations: [
    HomeComponent,
    LogoComponent,
    UserNameComponent,
    AddressComponent,
    DobComponent,
    GenderComponent,
    CcInfoComponent,
    ColorsComponent,
    CompanyNameComponent,
    CompanyPhoneComponent,
    CompanyEmailComponent,
    CompanyTitleComponent,
    CompanyDescriptionComponent,
    CompanyAboutComponent,
    AdminStartComponent,
    OrderButtonTextComponent,
    CompanySectionsComponent,
    SocialComponent,
    OrderHistoryComponent,
    TestHistoryComponent,
    CompanyImageComponent,
    SiteTypeComponent,
    UserPhoneNumberComponent,
    UserEmailComponent,
    CompanyComponent,
    ActivatedKitLabOrderPairingComponent,
    AboutProduct1EditComponent,
    AboutProduct2EditComponent,
    AboutProduct3EditComponent,
    Faq1EditComponent,
    Faq2EditComponent,
    Faq3EditComponent,
    Features1EditComponent,
    Features2EditComponent,
    Features3EditComponent,
    Features4EditComponent,
    Video1EditComponent,
    Video2EditComponent,
    HowTo1Component,
    CategoriesComponent,
    CategoryEditComponent,
    ProductTypeEditComponent,
    ProductTypeListComponent,
    StripeComponent,
    SubCategoryEditComponent,
    SubCategoryListComponent,
    ProductDependencyEditComponent,
    ProductDependencyListComponent,
    FirstSignInComponent,
    CreateAccountComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class SettingsModule { }
