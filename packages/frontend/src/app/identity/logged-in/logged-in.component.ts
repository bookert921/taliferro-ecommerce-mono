import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataService } from 'src/app/shared/services/data.service';
import { SettingService } from 'src/app/shared/services/setting.service';
import { UserService } from 'src/app/shared/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {

  public environment = environment;

  constructor(private _router: Router, public authService:AuthService, public settingService: SettingService, public userService: UserService) { 
  }

  ngOnInit(): void {
    this.settingService.getAll();
  }

  onStoreEvent(store: any): void {
    this._router.navigate(['shop', 'store', store._id ])
  }

}
