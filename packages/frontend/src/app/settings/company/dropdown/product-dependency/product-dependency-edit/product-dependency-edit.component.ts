import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-product-dependency-edit',
  templateUrl: './product-dependency-edit.component.html',
  styleUrls: ['./product-dependency-edit.component.css']
})
export class ProductDependencyEditComponent extends DataHandlerComponent implements OnInit {

  public newData: any;

  constructor(protected _dataService: DataService, public colorService: ColorsService) { 
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.onNew();
  }

  onNew(): void {
    this.newData = {
      name: ''
    };
  }

  onSubmit() : void {
    this.data = this.newData;
    this.onNew();
    super.onSubmit(environment.PRODUCT_DEPENDENCIES);
  }

  onEdit(value: any) : void {
    this.newData = value;
  }

}
