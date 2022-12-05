import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ViewportScroller } from '@angular/common';

import { Subscription } from 'rxjs';
import { CategoryService } from '../../services/category.service';
import { CartService } from '../../services/cart.service';
import { ShoppingCart, LineItem } from '../../data/shopping-cart.model';
import { ProductTypeService } from '../../services/product-type.service';
import { ColorsService } from '../../services/colors.service';
import { SubCategoryService } from '../../services/sub-category.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  @Input() data: any;
  @Input() background: any;
  @Input() catalogSection: boolean = false;
  @Input() text_only_catalog: boolean = false;
  @Output() itemAdded = new EventEmitter();
  productType = "";
  activeBackground = "#ffffff";
  currentFilter = '';


  constructor(private _viewportScroller: ViewportScroller, public subCategoryService: SubCategoryService, public productTypeService: ProductTypeService, public productService: ProductService, public categoryService: CategoryService, private _cartService: CartService, public colorService: ColorsService) {

  }

  ngOnInit(): void {

  }

  typeChanged() {
    this.productService.getAllByType(this.productType);
  }

  addToCart(item: any): void {
    this._viewportScroller.scrollToAnchor("cart");

    if (!this.isInCartAlready(item)) {
      this._cartService.cart.lineItems?.push({ 'product': item, 'quantity': 1 });
      this.itemAdded.emit();
    }
  }

  private isInCartAlready(item: any): boolean {
    let lt = (this._cartService.cart.lineItems && this._cartService.cart.lineItems?.length) ? this._cartService.cart.lineItems?.length : 0;
    let found = false;
    for (let index = 0; index < lt; index++) {
      const element = this._cartService.cart.lineItems?.[index];
      if (element?.product._id === item._id) {
        found = true;
        break;
      }
    }

    return found;
  }

  onSubCategory(item: any, name: any, x: number): void {
    let element = document.getElementById(name) as HTMLInputElement;
    if (!(item.subCategorySelected && item.subCategorySelected.length))
      item.subCategorySelected = [];

    item.subCategorySelected[x] = { name: name, checked: element.checked };
    item.subCategorySelectedText = name;

    if (!environment.production)
      console.log("onSubCategory", item);
  }

  onTypeSelect(item: any, at: number): void {
    item.subTypeSelected = (at + 1);
    item.subTypeSeletedText = item;
  }

  resetFilter(): void {
    this.currentFilter = '';
  }

  setFilter(filterCat: any): void {
    this.currentFilter = filterCat;
  }
}

