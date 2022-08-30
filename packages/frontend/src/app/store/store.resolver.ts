import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { StoreService } from '../shared/services/store.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class StoreResolver implements Resolve<any> {
  constructor(private _firestore: AngularFirestore, private _storeService: StoreService) { }
  resolve(route: ActivatedRouteSnapshot): any {
    return this._storeService.getStore(route.paramMap.get('id'));
  }
}
