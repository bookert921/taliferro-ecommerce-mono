import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DependencyCodeService } from 'src/app/shared/services/dependency-code.service';
@Component({
  selector: 'app-product-dependency-list',
  templateUrl: './product-dependency-list.component.html',
  styleUrls: ['./product-dependency-list.component.css']
})
export class ProductDependencyListComponent implements OnInit, OnDestroy {

  @Output() id = new EventEmitter();
  loading: any;
  private _dataSubscription?: Subscription;
  filteredData = '';

  constructor(public dataService: DependencyCodeService) {
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
