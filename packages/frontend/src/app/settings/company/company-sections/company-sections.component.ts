import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-company-sections',
  templateUrl: './company-sections.component.html',
  styleUrls: ['./company-sections.component.css']
})
export class CompanySectionsComponent extends DataHandlerComponent implements OnInit {

  constructor(protected _dataService: DataService, public colorService: ColorsService) { 
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onSubmit() : void {
    this.data.homeSection = (this.data.homeSection) ? this.data.homeSection : false;
    this.data.aboutSection = (this.data.aboutSection) ? this.data.aboutSection : false;
    this.data.checkoutSection = (this.data.checkoutSection) ? this.data.checkoutSection : false;
    this.data.footerSection = (this.data.footerSection) ? this.data.footerSection : false;

    super.onSubmit(environment.SETTINGS);
  }

}
