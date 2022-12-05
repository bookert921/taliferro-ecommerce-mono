import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgwWowModule } from 'ngx-wow';

import { CatalogProductFilterPipe } from './pipes/catalog-product-filter.pipe';
import { CartFilterPipe } from './pipes/cart-filter.pipe';
import { CustomerFilterPipe } from './pipes/customer-filter.pipe';
import { OrderFilterPipe } from './pipes/order-filter.pipe';
import { LabOrderFilterPipe } from './pipes/lab-order-filter.pipe';
import { DataCheckMarkPipe } from './pipes/data-check-mark.pipe';
import { DataMaxlengthColumnPipe } from './pipes/data-maxlength-column.pipe';
import { LabProgressPipe } from './pipes/lab-progress.pipe';
import { NoteSearchPipe } from './pipes/note-search.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { SentencePipe } from './pipes/sentence.pipe';
import { SortByCustomerLastNamePipe } from './pipes/sort-by-customer-last-name.pipe';
import { SortByLastNamePipe } from './pipes/sort-by-last-name.pipe';
import { StatusPipe } from './pipes/status.pipe';
import { TypeofPipe } from './pipes/typeof.pipe';
import { PracSortPipe } from './pipes/prac-sort.pipe';
import { NameSortPipe } from './pipes/name-sort.pipe';
import { TitleSortPipe } from './pipes/title-sort.pipe';
import { DateSortDescPipe } from './pipes/date-sort-desc.pipe';
import { OrderSortPipe } from './pipes/order-sort.pipe';
import { SortPositionPipe } from './pipes/sort-position.pipe';
import { ProductDependencyCalcPipe } from './pipes/product-dependency-calc.pipe';
import { CatalogDisplayOrderSortPipe } from './pipes/catalog-display-order-sort.pipe';
import { DailyReportPipe } from './pipes/daily-report.pipe';
import { AppointmentFilterPipe } from './pipes/appointment-filter.pipe';
import { AppointmentTimeSortPipe } from './pipes/appointment-time-sort.pipe';

import { DropzoneDirective } from './directives/dropzone.directive';

import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { DataHandlerComponent } from './components/data-handler/data-handler.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AboutComponent } from './components/about/about.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { ImageUploadTaskComponent } from './components/image-upload-task/image-upload-task.component';
import { ResultUploadTaskComponent } from './components/result-upload-task/result-upload-task.component';
import { ActivatedKitsComponent } from './components/activated-kits/activated-kits.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { MarketingFaq1Component } from './components/marketing-faq1/marketing-faq1.component';
import { MarketingFaq2Component } from './components/marketing-faq2/marketing-faq2.component';
import { MarketingFaq3Component } from './components/marketing-faq3/marketing-faq3.component';
import { MarketingAboutProduct1Component } from './components/marketing-about-product1/marketing-about-product1.component';
import { MarketingAboutProduct2Component } from './components/marketing-about-product2/marketing-about-product2.component';
import { MarketingAboutProduct3Component } from './components/marketing-about-product3/marketing-about-product3.component';
import { MarketingFeatures1Component } from './components/marketing-features1/marketing-features1.component';
import { MarketingFeatures2Component } from './components/marketing-features2/marketing-features2.component';
import { MarketingFeatures3Component } from './components/marketing-features3/marketing-features3.component';
import { MarketingVideo1Component } from './components/marketing-video1/marketing-video1.component';
import { MarketingVideo2Component } from './components/marketing-video2/marketing-video2.component';
import { HowToComponent } from './components/how-to/how-to.component';
import { VideoImageUploadTaskComponent } from './components/video-image-upload-task/video-image-upload-task.component';
import { StaticTopNavComponent } from './components/static-top-nav/static-top-nav.component';
import { InlineBoxNavComponent } from './components/inline-box-nav/inline-box-nav.component';
import { Image1UploadTaskComponent } from './components/image1-upload-task/image1-upload-task.component';
import { Image2UploadTaskComponent } from './components/image2-upload-task/image2-upload-task.component';
import { MarketingCarouselComponent } from './components/marketing-carousel/marketing-carousel.component';
import { Catalog2Component } from './components/catalog2/catalog2.component';
import { ConsentAuthorizationComponent } from './components/consent-authorization/consent-authorization.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StoreNavInlineBoxComponent } from './components/store-nav-inline-box/store-nav-inline-box.component';
import { StoreNavStaticTopComponent } from './components/store-nav-static-top/store-nav-static-top.component';

@NgModule({
  declarations: [
    AppointmentFilterPipe,
    AppointmentTimeSortPipe,
    CartFilterPipe,
    CatalogDisplayOrderSortPipe,
    CatalogProductFilterPipe,
    CustomerFilterPipe,
    DailyReportPipe,
    DataCheckMarkPipe,
    DataMaxlengthColumnPipe,
    DateSortDescPipe,
    LabOrderFilterPipe,
    LabProgressPipe,
    NameSortPipe,
    NoteSearchPipe,
    OrderFilterPipe,
    OrderSortPipe,
    PracSortPipe,
    ProductDependencyCalcPipe,
    SafePipe,
    SentencePipe,
    SortByCustomerLastNamePipe,
    SortByLastNamePipe,
    SortPositionPipe,
    StatusPipe,
    TitleSortPipe,
    TypeofPipe,

    DropzoneDirective,

    UploadTaskComponent,
    DataHandlerComponent,
    CatalogComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    AboutComponent,
    UnderConstructionComponent,
    HomeSectionComponent,
    ImageUploadTaskComponent,
    ResultUploadTaskComponent,
    ActivatedKitsComponent,
    TermsOfServiceComponent,
    MarketingFaq1Component,
    MarketingFaq2Component,
    MarketingFaq3Component,
    MarketingAboutProduct1Component,
    MarketingAboutProduct2Component,
    MarketingAboutProduct3Component,
    MarketingFeatures1Component,
    MarketingFeatures2Component,
    MarketingFeatures3Component,
    MarketingVideo1Component,
    MarketingVideo2Component,
    HowToComponent,
    VideoImageUploadTaskComponent,
    StaticTopNavComponent,
    InlineBoxNavComponent,
    Image1UploadTaskComponent,
    Image2UploadTaskComponent,
    MarketingCarouselComponent,
    Catalog2Component,
    ConsentAuthorizationComponent,
    DashboardComponent,
    StoreNavInlineBoxComponent,
    StoreNavStaticTopComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgwWowModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    NgwWowModule,
    RouterModule,
    DropzoneDirective,
    UploadTaskComponent,
    DataHandlerComponent,
    CatalogComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    AboutComponent,
    UnderConstructionComponent,
    HomeSectionComponent,
    ImageUploadTaskComponent,
    ResultUploadTaskComponent,
    ActivatedKitsComponent,
    MarketingFaq1Component,
    MarketingFaq2Component,
    MarketingFaq3Component,
    MarketingAboutProduct1Component,
    MarketingAboutProduct2Component,
    MarketingAboutProduct3Component,
    MarketingFeatures1Component,
    MarketingFeatures2Component,
    MarketingFeatures3Component,
    MarketingVideo1Component,
    MarketingVideo2Component,
    HowToComponent,
    VideoImageUploadTaskComponent,
    StaticTopNavComponent,
    InlineBoxNavComponent,
    Image1UploadTaskComponent,
    MarketingCarouselComponent,
    Catalog2Component,
    ConsentAuthorizationComponent,
    DashboardComponent,

    AppointmentFilterPipe,
    AppointmentTimeSortPipe,
    CartFilterPipe,
    CatalogDisplayOrderSortPipe,
    CatalogProductFilterPipe,
    CustomerFilterPipe,
    DailyReportPipe,
    DataCheckMarkPipe,
    DataMaxlengthColumnPipe,
    DateSortDescPipe,
    LabOrderFilterPipe,
    LabProgressPipe,
    NameSortPipe,
    NoteSearchPipe,
    OrderFilterPipe,
    OrderSortPipe,
    PracSortPipe,
    ProductDependencyCalcPipe,
    SafePipe,
    SentencePipe,
    SortByCustomerLastNamePipe,
    SortByLastNamePipe,
    SortPositionPipe,
    StatusPipe,
    TitleSortPipe,
    TypeofPipe,
    StoreNavInlineBoxComponent,
    StoreNavStaticTopComponent

  ]
})
export class SharedModule { }
