import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-first-sign-in',
  templateUrl: './first-sign-in.component.html',
  styleUrls: ['./first-sign-in.component.css']
})
export class FirstSignInComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
