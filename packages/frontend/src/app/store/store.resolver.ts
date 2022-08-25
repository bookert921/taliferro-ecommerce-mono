import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StoreService } from '../shared/services/store.service';
import {take, map} from 'rxjs/operators'
import {AngularFirestore} from '@angular/fire/firestore';

export interface Setting {
  _id: string
}



@Injectable({
  providedIn: 'root'
})
export class StoreResolver implements Resolve<any> {
  constructor(private _firestore: AngularFirestore, private _storeService: StoreService) {}
  resolve(route: ActivatedRouteSnapshot): any {
    return this._storeService.getStore(route.paramMap.get('id'));
  }
}
