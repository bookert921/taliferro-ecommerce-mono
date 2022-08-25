import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-sub-category-edit',
  templateUrl: './sub-category-edit.component.html',
  styleUrls: ['./sub-category-edit.component.css']
})
export class SubCategoryEditComponent extends DataHandlerComponent implements OnInit {

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
      name: '',
      sortPosition: 0,
    };
  }

  onSubmit() : void {
    this.data = this.newData;
    this.onNew();
    super.onSubmit(environment.SUB_CATEGORIES);
  }

  onEdit(value: any) : void {
    this.newData = value;
  }

}
