import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { StoreService } from '../shared/services/store.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreResolver implements Resolve<any> {
  constructor(private _firestore: AngularFirestore, private _storeService: StoreService) { }
  resolve(route: ActivatedRouteSnapshot): any {
    if (!environment.production)
      console.log("routing to store", route.paramMap.get('id'));
    return this._storeService.getStore(route.paramMap.get('id'));
  }
}
