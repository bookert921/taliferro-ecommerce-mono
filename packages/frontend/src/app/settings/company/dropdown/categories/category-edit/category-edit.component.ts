import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent extends DataHandlerComponent implements OnInit {

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
    super.onSubmit(environment.CATEGORIES);

  }

  onEdit(value: any) : void {
    this.newData = value;
  }
}
