import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  public statusText = "Oops!";
  public errorCode = "4 0 4";
  public errorMessage = "An Error Occurred";
  public subErrorMessage = "APOLOGIES!";
  public redirectLink = "/";
  public linkText = "Go to Home Page";
  public problemText = "Report a Problem?";
  public contactText = "Contact us";
  public contactLink = "/";


  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this._location.back()
  }

}
