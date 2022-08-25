import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-check-inbox',
  templateUrl: './check-inbox.component.html',
  styleUrls: ['./check-inbox.component.css']
})
export class CheckInboxComponent implements OnInit {

  public contactLink = "/contact";
  public contactLinkText = "Contact us";

  constructor(private _router: Router, public authService: AuthService, private _location: Location) { }

  ngOnInit(): void {
    setTimeout(() => {
      if  (!this.authService.emailSent)
        this._router.navigate(['error']);
    }
    ,5000)

  }

  back(): void {
    this._location.back();
  }

}
