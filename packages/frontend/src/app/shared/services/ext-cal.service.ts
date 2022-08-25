import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireFunctions } from "@angular/fire/functions";


@Injectable({
  providedIn: 'root'
})
export class ExtCalService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private _http: AngularFireFunctions) { }


  callExtract() : void {
    // let temp : Observable<any>;
    // const callable = this._http.httpsCallable('extCal');

    // temp = callable({data: ''});
    // temp.subscribe(d => {
    //   console.log("Function returns:", d)
    // })
  }
}
