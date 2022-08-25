import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-features2-edit',
  templateUrl: './features2-edit.component.html',
  styleUrls: ['./features2-edit.component.css']
})
export class Features2EditComponent extends DataHandlerComponent implements OnInit {

  constructor(protected _dataService: DataService, public colorService: ColorsService) {
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (!this.data.features2) {
      this.data.features2 = {
        headerText: '',
        descriptionText: '',

        featureHeading1: '',
        featureDescription1: '',
        featureIcon1: '',

        featureHeading2: '',
        featureDescription2: '',
        featureIcon2: '',

        featureHeading3: '',
        featureDescription3: '',
        featureIcon3: '',
      }
    }
  }

  onSubmit(): void {
    super.onSubmit(environment.SETTINGS);
  }

}
