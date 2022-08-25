import { Component, OnInit, OnDestroy, Output,  EventEmitter} from '@angular/core';

import { Location } from '@angular/common';

import { DataService } from 'src/app/shared/services/data.service';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';

import { environment } from "../../../environments/environment";
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-activation-complete',
  templateUrl: './activation-complete.component.html',
  styleUrls: ['./activation-complete.component.css']
})
export class ActivationCompleteComponent extends DataHandlerComponent implements OnInit, OnDestroy {

  @Output() goBack = new EventEmitter();

  constructor(private _location: Location, protected _dataService: DataService, public colorService: ColorsService) {
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }


  ngOnDestroy(): void {
    
  }

  public onAnother() : void {
    this.complete();
  }

  public onReturnToProfile(): void {
    this._location.back();
  }

}
