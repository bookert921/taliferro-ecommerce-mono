import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  @Output() id = new EventEmitter();
  data: any;
  filteredData = '';

  constructor(public productService: ProductService) { 
    this.productService.getAll();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  public onView(value: any): void {
    this.id.emit(value);
  }

}
