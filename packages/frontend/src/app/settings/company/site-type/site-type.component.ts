import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-site-type',
  templateUrl: './site-type.component.html',
  styleUrls: ['./site-type.component.css']
})
export class SiteTypeComponent extends DataHandlerComponent implements OnInit {

  constructor(protected _dataService: DataService, public colorService:ColorsService) { 
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onSubmit() : void {
    super.onSubmit(environment.SETTINGS);
  }

}
