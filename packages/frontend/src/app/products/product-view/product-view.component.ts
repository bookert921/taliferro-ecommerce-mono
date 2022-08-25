import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  @Input() data: any;
  @Input() isDiagnostic: boolean = false;
  @Output() editItem=  new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }


  onImage(): void {
    this.editItem.emit('image');
  }

  onName(): void {
    this.editItem.emit('name');
  }

  onQuantity(): void {
    this.editItem.emit('quantity');
  }

  onDescription(): void {
    this.editItem.emit('description');
  }

  onManufacturer(): void {
    this.editItem.emit('manufacturer');
  }

  onProductType(): void {
    this.editItem.emit('productType');
  }

  onProductSubType(): void {
    this.editItem.emit('product_sub_type');
  }

  onProductSubCategory(): void {
    this.editItem.emit('product_sub_category');
  }

  onProductPriceDependency(): void {
    this.editItem.emit('product_price_dependency');
  }

  setDiagnostic(): void {
    this.editItem.emit('diagnostic');
  }

  onActive(): void {
    this.editItem.emit('active');
  }

  onCategory(): void {
    this.editItem.emit('category');
  }

  onPrice(): void {
    this.editItem.emit('price');
  }

  onSku(): void {
    this.editItem.emit('sku');
  }

  onDimensions(): void {
    this.editItem.emit('dimension');
  }

  onStock(): void {
    this.editItem.emit('stock');
  }
}
