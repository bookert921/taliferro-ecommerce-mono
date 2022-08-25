import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-setup-required',
  templateUrl: './setup-required.component.html',
  styleUrls: ['./setup-required.component.css']
})
export class SetupRequiredComponent implements OnInit {

  constructor(public authService: AuthService) { 
    if (!environment.production)
      console.log("SetupRequiredComponent");

  }

  ngOnInit(): void {
  }

}
