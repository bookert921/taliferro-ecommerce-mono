import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/data/product.model';

@Component({
  selector: 'app-product-sub-type-list',
  templateUrl: './product-sub-type-list.component.html',
  styleUrls: ['./product-sub-type-list.component.css']
})
export class ProductSubTypeListComponent implements OnInit, OnDestroy {

  @Output() id = new EventEmitter();
  @Output() deleteAction = new EventEmitter();
  @Input() data?: Product;
  loading: any;
  filteredData = '';

  constructor() {

  }

  ngOnInit(): void {
    if (this.data)
      if (!this.data.subType)
        this.data.subType=[];
        
  }

  ngOnDestroy(): void {

  }

  onNew(): void {
    let subType = {
      name: '',
      price: 0.00,
      salePrice: 0.00,
      onSale: false,
    };
    let x = {'item': subType, 'editMode': false};
    this.id.emit(x);
  }

  public onEdit(value: any): void {
    let x = {'item': value, 'editMode': true};
    this.id.emit(x);
  }


  public onDelete(at: any): void {
    this.data?.subType?.splice(at,1);
    this.deleteAction.emit();
  }

}
