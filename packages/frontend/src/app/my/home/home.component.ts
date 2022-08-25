import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/services/user.service';
import { SettingService } from 'src/app/shared/services/setting.service';
import { Subscription } from 'rxjs';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public settings: any;
  private _settingSubscription?: Subscription; 
  

  constructor(private _location: Location, public userService: UserService, public settingService: SettingService, public colorService: ColorsService, private _router:Router) { 
    if (!environment.production)
      console.log("my HomeComponent");
  }

  ngOnInit(): void {
    // setTimeout(() => {this.practiceAlert = false}, 20000);
  }

  ngOnDestroy(): void {

  }

  onSignOut(): void {
    this._router.navigate(['identity', 'bye']);
  }


  back(): void {
    this._location.back()
  }

}
