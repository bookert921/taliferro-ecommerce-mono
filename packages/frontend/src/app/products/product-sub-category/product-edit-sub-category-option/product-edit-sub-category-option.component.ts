import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { SubCategoryService } from 'src/app/shared/services/sub-category.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-edit-sub-category-option',
  templateUrl: './product-edit-sub-category-option.component.html',
  styleUrls: ['./product-edit-sub-category-option.component.css']
})
export class ProductEditSubCategoryOptionComponent extends DataHandlerComponent implements OnInit, OnDestroy {

  private _dataSubscription?: Subscription;
  options: any = {
    values: [],
    price: 0.00
  };
  public editMode = false;
  private _dataOptions: any;

  constructor(protected _dataService: DataService, public subCategoryService: SubCategoryService, public colorService: ColorsService) {
    super(_dataService);
    this.subCategoryService.getAll();
  }

  ngOnInit(): void {
    super.ngOnInit();

    this._dataSubscription = this.subCategoryService.items?.subscribe((data: any) => {
      this._dataOptions = data;
      this.onNew();
      // console.log(this.options);
    });
  }

  ngOnDestroy(): void {
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
  }

  onNew(): void {
    this.editMode = false;
    this.options = <Option>{
      values: [],
      price: 0.00
    };
    this.populateCheckBoxes();
  }

  populateCheckBoxes(): void {
    this._dataOptions.forEach((item: any) => {
      this.options.values.push({ name: item.name, checked: false });
    });
  }

  pushNewItem(): void {
    if (!this.data.subCategory)
      this.data.subCategory = [];

    if (this.editMode) {
      if (!environment.production)
        console.log("Editing", this.editMode)
    } else {
      if (!environment.production)
        console.log("Adding", this.editMode)

      this.data.subCategory.push(this.options);
    }
  }

  onSubmit(): void {
    this.pushNewItem();
    super.onSubmit(environment.PRODUCTS);
    this.onNew();
  }

  onEdit(value: any): void {
    this.editMode = value.editMode;

    if (!value.editMode)
      this.onNew();
    else
      this.options = value.item;

  }

  onDelete(): void {
    super.onSubmit(environment.PRODUCTS);
    this.onNew();
  }

}

export interface Option {
  values: Array<{ name: string, checked: boolean }>,
  price: number
}
