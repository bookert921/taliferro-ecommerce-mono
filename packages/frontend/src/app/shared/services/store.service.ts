import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {take, map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private _dataService: DataService, public http: HttpClient) { }

  getStore(id: any) : Observable<any> {
    return of(this._dataService.getRecord(environment.SETTINGS, id).pipe(map(item => {
          return item;  
        })))
  }

}
