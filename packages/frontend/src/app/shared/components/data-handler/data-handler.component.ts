import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-data-handler',
  templateUrl: './data-handler.component.html',
  styleUrls: ['./data-handler.component.css']
})
export class DataHandlerComponent implements OnInit {

  @Input() data: any;
  @Output() done = new EventEmitter();

  public production: boolean = false;
  public transaction_complete: boolean = false;

  constructor(protected _dataService: DataService) {

  }

  ngOnInit(): void {
  }

  onSetByUID(collectionName: string): void {
    try {
      this._dataService.updateByUID(collectionName, this.data);
      this.complete();
    } catch (error) {
      if (!environment.production)
        console.error(error);
    }
  }

  onSubmit(collectionName: string): void {
    if (this.data._id || this.data.uid)
      this.onUpdate(collectionName);
    else
      this.onAdd(collectionName);
  }

  onUpdate(collectionName: string): void {
    try {
      this._dataService.update(collectionName, this.data._id, this.data);
      this.complete();
    } catch (error) {
      if (!environment.production)
        console.error(error);
    }
  }

  onAdd(collectionName: string): void {
    try {
      this._dataService.add(collectionName, this.data).then((result) => {
        this.data._id = result.id;
        this.complete();
      })
      this.complete();
    } catch (error) {
      if (!environment.production)
        console.error(error);
    }
  }

  complete(): void {
    this.transaction_complete = true;
    this.done.emit();
  }

  onCancel(): void {
    this.complete();
  }


}
