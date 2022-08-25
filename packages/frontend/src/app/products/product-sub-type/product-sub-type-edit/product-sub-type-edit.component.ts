import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { Product } from 'src/app/shared/data/product.model';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-product-sub-type-edit',
  templateUrl: './product-sub-type-edit.component.html',
  styleUrls: ['./product-sub-type-edit.component.css']
})
export class ProductSubTypeEditComponent extends DataHandlerComponent implements OnInit {

  subType: any = {
    name: '',
    price: 0.00,
    salePrice: 0.00,
    onSale: false,
  };

  public editMode = false;
  public production: boolean = false;

  constructor(protected _dataService: DataService, public colorService: ColorsService) {
    super(_dataService);
    
  }

  ngOnInit(): void {
    super.ngOnInit();
  }


  onSubmit(): void {
    this.pushNewItem();
    super.onSubmit(environment.PRODUCTS);
    setTimeout(() => {
      this.subType = {
        name: '',
        price: 0.00,
        salePrice: 0.00,
        onSale: false,
      };
    }, 1500);
  }

  pushNewItem(): void {
    if (!this.data.subType)
      this.data.subType = [];

    if (this.editMode) {
      if (!environment.production)
        console.log("Editing", this.editMode)
    } else {
      if (!environment.production)
        console.log("Adding", this.editMode)

      this.data.subType.push(this.subType);
    }
  }

  onEdit(value: any): void {
    this.subType = value.item;
    this.editMode = value.editMode;
  }

  onDelete(): void {
    super.onSubmit(environment.PRODUCTS);
  }
}
