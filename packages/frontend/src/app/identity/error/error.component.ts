import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public statusText = "Oops!";
  public errorCode = "4 0 4";
  public errorMessage = "AN ERROR OCCURRED";
  public subErrorMessage = "APOLOGIES!";
  public redirectLink = "/";
  public linkText = "Go to Home Page";
  public problemText = "Report a Problem?";
  public contactText = "Contact us";
  public contactLink = "/contact";
  constructor() { }

  ngOnInit(): void {
  }

}
