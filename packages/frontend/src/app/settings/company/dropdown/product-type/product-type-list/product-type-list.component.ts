import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductTypeService } from 'src/app/shared/services/product-type.service';

@Component({
  selector: 'app-product-type-list',
  templateUrl: './product-type-list.component.html',
  styleUrls: ['./product-type-list.component.css']
})
export class ProductTypeListComponent implements OnInit, OnDestroy {

  @Output() id = new EventEmitter();
  loading: any;
  private _dataSubscription?: Subscription;
  filteredData = '';

  constructor(public dataService: ProductTypeService) {
    this.dataService.getAll();
  }

  ngOnInit(): void {
    this._dataSubscription = this.dataService.items?.subscribe(() => {
      this.loading = 'complete';
    });
  }

  ngOnDestroy(): void {
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
  }


  public onEdit(value: any): void {
    this.id.emit(value);
  }

  public onNew(): void {
    let data = {
      name: ''
    };
    this.id.emit(data)
  }

  public onDelete(item: any): void {
    this.dataService.delete(item._id);
    this.onNew();
  }

}
