import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ProductTypeService } from 'src/app/shared/services/product-type.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-product-edit-type',
  templateUrl: './product-edit-type.component.html',
  styleUrls: ['./product-edit-type.component.css']
})
export class ProductEditTypeComponent extends DataHandlerComponent implements OnInit {

  constructor(protected _dataService: DataService, public productTypeService: ProductTypeService, public colorService: ColorsService) { 
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.productTypeService.getAll();
  }

  onSubmit() : void {
    super.onSubmit(environment.PRODUCTS);
  }


}
