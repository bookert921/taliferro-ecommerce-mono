import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { DependencyCodeService } from 'src/app/shared/services/dependency-code.service';

@Component({
  selector: 'app-product-edit-price-dependencies',
  templateUrl: './product-edit-price-dependencies.component.html',
  styleUrls: ['./product-edit-price-dependencies.component.css']
})
export class ProductEditPriceDependenciesComponent extends DataHandlerComponent implements OnInit {


  public editMode = false;
  public production: boolean = false;


  constructor(protected _dataService: DataService, public colorService: ColorsService, public dependencyCodeService: DependencyCodeService) {
    super(_dataService);
    
    this.dependencyCodeService.getAll();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.onNew();
  }

  onNew() : void {
    if (!this.data.dependency) {
      this.data.dependency = {
        priceDependent: false,
        dependencyCode: '',
        price: 0.00,
        salePrice: 0.00,
        onSale: false
      };
    }
  }


  onSubmit(): void {
    super.onSubmit(environment.PRODUCTS);
  }

}
