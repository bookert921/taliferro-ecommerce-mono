import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from '../../shared/data/product.model';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: any;
  public isEditMode: boolean = false;

  public isProductCategory: boolean = false;
  public isProductDescription: boolean = false;
  public isProductDimensions: boolean = false;
  public isProductImage: boolean = false;
  public isProductManufacturer: boolean = false;
  public isProductName: boolean = false;
  public isProductPrice: boolean = false;
  public isProductQuantity: boolean = false;
  public isProductSku: boolean = false;
  public isProductStock: boolean = false;
  public isProductType: boolean = false;
  public isProductActive: boolean = false;
  public isProductSubType: boolean = false;
  public isDiagnostic: boolean = false;
  public isProductPriceDepency: boolean = false;
  public isProductSubCategory: boolean = false;

  constructor(private _location: Location, public colorService: ColorsService, private _router: Router) { }

  ngOnInit(): void {
  }

  back(): void {
    this._location.back();
  }


  list(): void {
    this.isEditMode = false;
  }

  onView(data: any) {
    this.isEditMode = true;
    this.data = data;
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  onDashboard(): void {
    this._router.navigate(['admin']);
  }

  onSignOut(): void {
    this._router.navigate(['identity', 'bye']);
  }

  onNew(): void {
    this.isEditMode = true;
    this.data = <Product>{
      description: {
        short: 'No Short Description',
        long: 'No Long Description'
      },
      category: '',
      productType: '',
      subType: []
    };
  }

  onEdit(event: any): void {
    this.editReset();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    switch (event) {
      case 'image':
        this.onImage();
        break;
      case 'name':
        this.onName();
        break;
      case 'quantity':
        this.onQuantity();
        break;
      case 'description':
        this.onDescription();
        break;
      case 'manufacturer':
        this.onManufacturer();
        break;
      case 'category':
        this.onCategory();
        break;
      case 'price':
        this.onPrice();
        break;
      case 'sku':
        this.onSku();
        break;
      case 'dimension':
        this.onDimensions();
        break;
      case 'stock':
        this.onStock();
        break;
      case 'productType':
        this.onProductType();
        break;
      case 'active':
        this.onProductActive();
        break;
      case 'product_sub_type':
        this.onProductSubType();
        break;
      case 'product_price_dependency':
        this.onProductPriceDependency();
        break;
      case 'product_sub_category':
        this.onProductSubCategory();
        break;
      case 'diagnostic':
        this.setDiagnostic();
        break;
    }
  }

  editReset(): void {
    this.isProductCategory = false;
    this.isProductDescription = false;
    this.isProductDimensions = false;
    this.isProductImage = false;
    this.isProductManufacturer = false;
    this.isProductName = false;
    this.isProductPrice = false;
    this.isProductQuantity = false;
    this.isProductSku = false;
    this.isProductStock = false;
    this.isProductType = false;
    this.isProductActive = false;
    this.isProductSubType = false;
    this.isDiagnostic = false;
    this.isProductSubCategory = false;
    this.isProductPriceDepency = false;
  }

  onProductPriceDependency(): void {
    this.isProductPriceDepency = true;
  }

  onProductSubCategory(): void {
    this.isProductSubCategory = true;
  }

  onProductActive(): void {
    this.isProductActive = true;
  }

  onProductType(): void {
    this.isProductType = true;
  }

  onImage(): void {
    this.isProductImage = true;
  }

  onName(): void {
    this.isProductName = true;
  }

  onQuantity(): void {
    this.isProductQuantity = true;
  }

  onDescription(): void {
    this.isProductDescription = true;
  }

  onManufacturer(): void {
    this.isProductManufacturer = true;
  }

  setDiagnostic(): void {
    this.isDiagnostic = !this.isDiagnostic;
  }

  onCategory(): void {
    this.isProductCategory = true;
  }

  onPrice(): void {
    this.isProductPrice = true;
  }

  onSku(): void {
    this.isProductSku = true;
  }

  onDimensions(): void {
    this.isProductDimensions = true;
  }

  onStock(): void {
    this.isProductStock = true;
  }

  onProductSubType(): void {
    this.isProductSubType = true;
  }
}
