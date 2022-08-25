import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';


@Component({
  selector: 'app-how-to1',
  templateUrl: './how-to1.component.html',
  styleUrls: ['./how-to1.component.css']
})
export class HowTo1Component extends DataHandlerComponent implements OnInit {

  constructor(protected _dataService: DataService, public colorService: ColorsService) { 
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (!this.data.howTo) {
      this.data.howTo = {
        headerText: '',
        descriptionText : '',      
        header1 : '',
        description1 : '',
        header2 : '',
        description2 : '',
        header3 : '',
        description3 : ''
      }
    }
  }

  onSubmit() : void {
    super.onSubmit(environment.SETTINGS);
  }

}
