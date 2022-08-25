import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubCategoryService } from 'src/app/shared/services/sub-category.service';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.css']
})
export class SubCategoryListComponent implements OnInit, OnDestroy {

  @Output() id = new EventEmitter();
  loading: any;
  private _dataSubscription?: Subscription;
  filteredData = '';

  constructor(public dataService: SubCategoryService) {
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
