import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-faq2-edit',
  templateUrl: './faq2-edit.component.html',
  styleUrls: ['./faq2-edit.component.css']
})
export class Faq2EditComponent extends DataHandlerComponent implements OnInit {

  constructor(protected _dataService: DataService, public colorService: ColorsService) {
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (!this.data.faq2) {
      this.data.faq2 = {
        headerText: '',
        descriptionText: '',
        faqHeading1: '',
        faqDescription1: '',

        faqHeading2: '',
        faqDescription2: '',

        faqHeading3: '',
        faqDescription3: '',

        faqHeading4: '',
        faqDescription4: '',
      }
    }
  }

  onSubmit(): void {
    super.onSubmit(environment.SETTINGS);
  }

}
