import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { take, map } from 'rxjs/operators'
import { SettingService } from './setting.service';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private _dataService: DataService, private _settingService: SettingService) { }

  getStore(id: any): Observable<any> {
    if (!environment.production)
      console.log("getStore", id);
    return of(this._dataService.getRecord(environment.SETTINGS, id).pipe(map(item => {
      this._settingService.settings = item;

      if (!environment.production)
        console.log("StoreService", item, this._settingService.settings);

      return item;
    })))
  }

}
