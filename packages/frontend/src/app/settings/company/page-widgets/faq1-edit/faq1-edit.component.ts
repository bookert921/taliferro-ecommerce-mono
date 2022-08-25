import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-faq1-edit',
  templateUrl: './faq1-edit.component.html',
  styleUrls: ['./faq1-edit.component.css']
})
export class Faq1EditComponent extends DataHandlerComponent implements OnInit {

  constructor(protected _dataService: DataService, public colorService: ColorsService) { 
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (!this.data.faq1) {
      this.data.faq1 = {
        headerText: '',
        descriptionText : '',      
        faqHeading1 : '',
        faqDescription1 : '',
        faqHeading2 : '',
        faqDescription2 : '',
        faqHeading3 : '',
        faqDescription3 : ''
      }
    }
  }

  onSubmit() : void {
    super.onSubmit(environment.SETTINGS);
  }

}
