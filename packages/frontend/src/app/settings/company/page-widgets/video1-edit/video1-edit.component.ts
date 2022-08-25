import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-video1-edit',
  templateUrl: './video1-edit.component.html',
  styleUrls: ['./video1-edit.component.css']
})
export class Video1EditComponent extends DataHandlerComponent implements OnInit {

  constructor(protected _dataService: DataService, public colorService: ColorsService) { 
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (!this.data.video1) {
      this.data.video1 = {
        headerText: '',
        descriptionText : '',      
        videoURL : '',
        videoID: null,
        imageURL : ''
      }
    }
  }

  onSubmit() : void {
    super.onSubmit(environment.SETTINGS);
  }

}
