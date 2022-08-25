import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { SettingService } from 'src/app/shared/services/setting.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnDestroy {

  constructor(public colorService: ColorsService, public authService: AuthService, public userService: UserService, public settingService: SettingService) { }

  ngOnInit(): void {
    if (!environment.production)
      console.log("OVERVIEW", this.settingService.settings);
  }

  ngOnDestroy(): void {

  }



}
