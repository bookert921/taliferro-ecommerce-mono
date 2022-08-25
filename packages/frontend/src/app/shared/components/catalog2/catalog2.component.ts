import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { CartService } from '../../services/cart.service';
import { ProductTypeService } from '../../services/product-type.service';
import { ColorsService } from '../../services/colors.service';
import { SubCategoryService } from '../../services/sub-category.service';
import { Product } from '../../data/product.model';

import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-catalog2',
  templateUrl: './catalog2.component.html',
  styleUrls: ['./catalog2.component.css']
})
export class Catalog2Component implements OnInit {

  @Input() data: any;
  @Input() background: any;
  @Output() itemAdded = new EventEmitter();

  productType = "";
  activeBackground = "#ffffff";
  currentFilter = '';
  tab = 1;
  dependencyCodes = '';
  dependencyCodeCount = 0;

  tempdependencyCodes = '';
  tempdependencyCodeCount = 0;
  @Input() subCategoryItems: any;
  @Input() products: any;
  @Input() allProducts: any;


  constructor(private _viewportScroller: ViewportScroller, public authService:AuthService, public userService: UserService, public subCategoryService: SubCategoryService, public colorService: ColorsService, public productTypeService: ProductTypeService, public productService: ProductService, public categoryService: CategoryService, public cartService: CartService) {
    
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  typeChanged() {
    this.productService.getAllByType(this.productType);
  }

  addToCart(item: any): void {
    this._viewportScroller.scrollToAnchor("cart");

    if (!this.isInCartAlready(item)) {
      this.cartService.cart.lineItems?.push({ 'product': item, 'quantity': 1 });
      this.checkForDependency(item);
      this.itemAdded.emit();
    }
  }


  checkForDependency(item: Product): void {
    this.checkCartDependency();
  }

  checkCartDependency(): void {
    this.dependencyCodeCount = 0;
    this.dependencyCodes = '';

    if (!environment.production)
      console.log("dependencyCodeCount", this.dependencyCodeCount);

    this.cartService.cart.lineItems?.forEach((item) => {
      console.log("Loop", item.product);
      if (item.product && item.product.dependency && item.product.dependency.dependencyCode && !item.product.dependency.priceDependent) {
        if (this.dependencyCodeCount > 0)
          this.dependencyCodes += ","
        this.dependencyCodes += item.product.dependency.dependencyCode;
        this.dependencyCodeCount++;
      }

    });

    if (!environment.production) {
      let codeSplit = this.dependencyCodes.split(",");
      console.log(this.dependencyCodes, "Temp Codes Split", codeSplit);
    }
  }




  onTab(index: number) {
    this.tab = index;
  }

  private isInCartAlready(item: any): boolean {
    let lt = (this.cartService.cart.lineItems && this.cartService.cart.lineItems?.length) ? this.cartService.cart.lineItems?.length : 0;
    let found = false;
    for (let index = 0; index < lt; index++) {
      const element = this.cartService.cart.lineItems?.[index];
      if (element?.product._id === item._id) {
        found = true;
        break;
      }
    }
    return found;
  }

  onSubCategory(item: any, o: any, x: number): void {
    let elementName = item.title + o.name + x;
    let element = document.getElementById(elementName) as HTMLInputElement;
    if (!(item.subCategorySelected && item.subCategorySelected.length)) {
      item.subCategorySelected = [];
      for (let index = 0; index < this.subCategoryItems.length; index++) {
        item.subCategorySelected.push({ name: null, checked: false })
      }
    }


    item.subCategorySelected[x] = { name: o.name, checked: element.checked };
    // item.subCategorySelectedText = o.name;
    item.subCategorySelectedText = '';
    for (let index = 0; index < item.subCategorySelected.length; index++) {
      const element = item.subCategorySelected[index];
      if (element.checked)
        item.subCategorySelectedText += element.name + ' ';
    }


    let numberChecked = 0;
    let itemsChecked = [];
    for (let index = 0; index < item.subCategorySelected.length; index++) {
      if (item.subCategorySelected[index] && item.subCategorySelected[index].checked) {
        itemsChecked.push(item.subCategorySelected[index].name);
        numberChecked++;
      }
    }

    if (numberChecked === 0) {
      item.subCategorySelected = [];
      this.checkIfToRemove(item, numberChecked);
    }
    this.calcPriceBasedOnSubCategory(item, itemsChecked);

    item.subCategorySelectedText = item.subCategorySelectedText.trim();


    if (!environment.production)
      console.log("SubCategorySelected", item.subCategorySelected, item.subCategorySelectedText)
  }

  private checkIfToRemove(item: any, numberChecked: number): void {
    let lt = (this.cartService.cart.lineItems && this.cartService.cart.lineItems?.length) ? this.cartService.cart.lineItems?.length : 0;
    if (numberChecked === 0) {
      for (let index = 0; index < lt; index++) {
        const element = this.cartService.cart.lineItems?.[index];
        if (element?.product._id === item._id) {
          this.cartService.cart.lineItems?.splice(index, 1);
        }
      }
      this.checkCartDependency()
    }
  }



  calcPriceBasedOnSubCategory(item: any, itemsChecked: Array<any>): void {
    if (item.subCategory && item.subCategory.length) {
      for (let index = 0; index < item.subCategory.length; index++) {
        const a = item.subCategory[index];
        let found = this.getPrice(a, itemsChecked);

        if (!environment.production)
          console.log("Found", found);

        if (found) {
          item.calculatedPrice = a.price;
          this.itemAdded.emit();
          break;
        } else {
          item.calculatedPrice = undefined;
          this.itemAdded.emit();
        }
      }
    }
  }

  getPrice(element: any, itemsChecked: Array<any>): boolean {
    let ok = false;
    for (let index = 0; index < element.values.length; index++) {
      const e = element.values[index];
      if (e.checked)
        ok = itemsChecked.includes(e.name)
      else
        ok = !itemsChecked.includes(e.name);

      // console.log(ok, e);
      if (!ok)
        return false;
    }
    return ok;

  }


  onSubTypeSelect(item: any, selected: any, at: number): void {

    item.subTypeSelected = (at + 1);
    item.subTypeSelectedText = item.subType[at].name;
    // console.log(item, selected);
  }

  resetFilter(): void {
    this.currentFilter = '';
    // this.products = this.productService.items?.pipe(
    //   map(items => {
    //     return items;
    //   })
    // )
  }

  setFilter(filterCat: any): void {
    this.currentFilter = filterCat;
    // this.filterProducts();
    // console.log("Filtering");
  }

  // filterProducts(): void {
  //   this.products = this.productService.items?.pipe(
  //     map(items => {
  //       return items.filter(item => { return (item.category === this.currentFilter) })
  //     })
  //   )
  // }
}