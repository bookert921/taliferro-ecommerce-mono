import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  public companyName: string = '';
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public companyId: string = '';

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    window.localStorage.setItem('firstName', this.firstName);
    window.localStorage.setItem('lastName', this.lastName);
    window.localStorage.setItem('companyName', this.companyName);
    window.localStorage.setItem('companyId', this.companyId);

    this._authService.signInWithEmail(this.email);

    this._router.navigate(['identity', 'check-inbox']);
  }

}
