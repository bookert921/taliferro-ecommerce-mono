import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-product-edit-category',
  templateUrl: './product-edit-category.component.html',
  styleUrls: ['./product-edit-category.component.css']
})
export class ProductEditCategoryComponent extends DataHandlerComponent implements OnInit {

  constructor(protected _dataService: DataService, public categoryService: CategoryService, public colorService: ColorsService) { 
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.categoryService.getAll();
  }

  onSubmit() : void {
    super.onSubmit(environment.PRODUCTS);
  }

}
