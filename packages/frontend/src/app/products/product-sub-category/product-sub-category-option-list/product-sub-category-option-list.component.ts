import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { Product } from 'src/app/shared/data/product.model';

@Component({
  selector: 'app-product-sub-category-option-list',
  templateUrl: './product-sub-category-option-list.component.html',
  styleUrls: ['./product-sub-category-option-list.component.css']
})
export class ProductSubCategoryOptionListComponent implements OnInit {

  @Output() id = new EventEmitter();
  @Output() deleteAction = new EventEmitter();
  @Input() data?: Product;


  constructor() { }

  ngOnInit(): void {
    if (this.data)
      if (!this.data.subCategory)
        this.data.subCategory = [];

  }

  onNew(): void {
    let x = { 'item': null, 'editMode': false };
    this.id.emit(x);
  }

  public onEdit(value: any): void {
    let x = { 'item': value, 'editMode': true };
    this.id.emit(x);
  }


  public onDelete(at: any): void {
    this.data?.subCategory?.splice(at, 1);
    this.deleteAction.emit();
  }


}
