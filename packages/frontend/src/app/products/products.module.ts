import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditNameComponent } from './product-edit-name/product-edit-name.component';
import { ProductEditPriceComponent } from './product-edit-price/product-edit-price.component';
import { ProductEditDescriptionComponent } from './product-edit-description/product-edit-description.component';
import { ProductEditCategoryComponent } from './product-edit-category/product-edit-category.component';
import { ProductEditImageComponent } from './product-edit-image/product-edit-image.component';
import { ProductEditQuantityComponent } from './product-edit-quantity/product-edit-quantity.component';
import { ProductEditDimensionsComponent } from './product-edit-dimensions/product-edit-dimensions.component';
import { ProductEditManufacturerComponent } from './product-edit-manufacturer/product-edit-manufacturer.component';
import { ProductEditStockComponent } from './product-edit-stock/product-edit-stock.component';
import { ProductEditSkuComponent } from './product-edit-sku/product-edit-sku.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductEditTypeComponent } from './product-edit-type/product-edit-type.component';
import { ProductEditActiveComponent } from './product-edit-active/product-edit-active.component';
import { ProductSubTypeEditComponent } from './product-sub-type/product-sub-type-edit/product-sub-type-edit.component';
import { ProductSubTypeListComponent } from './product-sub-type/product-sub-type-list/product-sub-type-list.component';
import { ProductEditSubCategoryOptionComponent } from './product-sub-category/product-edit-sub-category-option/product-edit-sub-category-option.component';
import { ProductEditPriceDependenciesComponent } from './product-price-dependencies/product-edit-price-dependencies/product-edit-price-dependencies.component';
import { ProductPriceDependenciesListComponent } from './product-price-dependencies/product-price-dependencies-list/product-price-dependencies-list.component';
import { ProductSubCategoryOptionListComponent } from './product-sub-category/product-sub-category-option-list/product-sub-category-option-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
    ProductViewComponent,
    ProductEditNameComponent,
    ProductEditPriceComponent,
    ProductEditDescriptionComponent,
    ProductEditCategoryComponent,
    ProductEditImageComponent,
    ProductEditQuantityComponent,
    ProductEditDimensionsComponent,
    ProductEditManufacturerComponent,
    ProductEditStockComponent,
    ProductEditSkuComponent,
    ProductFilterPipe,
    ProductEditTypeComponent,
    ProductEditActiveComponent,
    ProductSubTypeEditComponent,
    ProductSubTypeListComponent,
    ProductEditSubCategoryOptionComponent,
    ProductEditPriceDependenciesComponent,
    ProductPriceDependenciesListComponent,
    ProductSubCategoryOptionListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
