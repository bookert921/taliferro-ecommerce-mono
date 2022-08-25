import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-about-product1-edit',
  templateUrl: './about-product1-edit.component.html',
  styleUrls: ['./about-product1-edit.component.css']
})
export class AboutProduct1EditComponent extends DataHandlerComponent implements OnInit {

  constructor(protected _dataService: DataService, public colorService: ColorsService) { 
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (!this.data.aboutProduct1) {
      this.data.aboutProduct1 = {
        headerText: '',
        descriptionText : '',
        buttonText : '',
        buttonLink : '',
        featureBlockText1 : '',
        featureBlockIcon1 : '',
      
        featureBlockText2 : '',
        featureBlockIcon2 : '',
      
        featureBlockText3 : '',
        featureBlockIcon3 : '',
        featureBlockBadgeText3 : '',
      
        featureBlockText4 : '',
        featureBlockIcon4 : '',
        featureBlockBadgeText4 : ''
      }
    }
  }

  onSubmit() : void {
    super.onSubmit(environment.SETTINGS);
  }

}
