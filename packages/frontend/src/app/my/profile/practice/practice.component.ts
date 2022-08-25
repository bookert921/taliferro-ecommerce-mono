import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent extends DataHandlerComponent implements OnInit {

  constructor(protected _dataService: DataService, public colorService: ColorsService) {
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onSubmit(): void {
    if (this.data.userType == 'patient') {
      this.data.practitionerName = '';
      this.data.npi = '';
      this.data.customerId = '';
      this.data.pracFirstName = '';
      this.data.pracLastName = '';
      super.onSetByUID(environment.USERS);
    } else {
      if ((this.data.practitionerName && this.data.practitionerName != '')
        && (this.data.customerId && this.data.customerId != ''))
        super.onSetByUID(environment.USERS);
    }
  }


}
