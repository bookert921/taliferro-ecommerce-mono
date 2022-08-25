import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private _http: HttpClient) { }

  public getIPAddress() {
    return this._http.get("https://api.ipify.org/?format=json");
  }
}
