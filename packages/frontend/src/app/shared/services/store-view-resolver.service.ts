import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
/*****************************************************************************
*                 Taliferro License Notice
*
* The contents of this file are subject to the Taliferro License
* (the "License"). You may not use this file except in
* compliance with the License. A copy of the License is available at
* http://www.taliferro.com/license/
*
*
* Title: StoreViewResolverService
* @author Tyrone Showers
*
* Copyright (c) 1997-2017 Taliferro, Inc. All Rights Reserved.
*
*        Description
*
*
*****************************************************************************/

@Injectable()
export class StoreViewResolverService implements Resolve<any> {

  constructor(private _firestore: AngularFirestore) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>|Promise<any> {
    let id = route.paramMap.get('id');

    if (!environment.production)
      console.log("Store ID ", id);

    return this._firestore.doc<any>(environment.SETTINGS + '/' + id).valueChanges({ idField: '_id' }).pipe(
      catchError(error => { return of('No data')})
    )
    ;
        
  }


}
