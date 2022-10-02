import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';

import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { ColorsService } from './shared/services/colors.service';
import { SettingService } from './shared/services/setting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private _routeSubscription?: Subscription;
  private _dataSubscription?: Subscription;
  private _userSubscription?: Subscription;

  public isHome: boolean = false;
  public isSignIn: boolean = false;
  public isSpecialHome: boolean = false;

  public company: any;
  public backgroundColor = '#ffffff';
  public color = "#000000";
  public footerSection: boolean = true;

  private _pageTitle = '';

  public constructor(private _activatedRoute: ActivatedRoute, public router: Router, private _dataService: DataService, private _titleService: Title, public userService: UserService, public authService: AuthService, private _colorService: ColorsService, private _wowService: NgwWowService, private _settingsService: SettingService) {
    if (!environment.production)
      console.log("APP");

    // this.companySettings();
  }

  ngOnInit() {
    this._routeSubscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this._activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data))
      .subscribe((event) => {
        this._wowService.init();

        this._pageTitle = event['title'] + ' - ' + environment.COMPANY_NAME;;
        this.isHome = (event['title'] == 'Home');
        this.isSignIn = (event['title'] == 'Sign In');
        setTimeout(() => { this.setPageTitle() }, 1000);
      });
  }

  ngOnDestroy() {
    if (this._routeSubscription)
      this._routeSubscription.unsubscribe();
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
    if (this._userSubscription)
      this._userSubscription.unsubscribe();
  }

  private setPageTitle(): void {
    this._titleService.setTitle((this.company && this.company.name) ? this.company.name + ' - ' + this._pageTitle : this._pageTitle);
  }




}
