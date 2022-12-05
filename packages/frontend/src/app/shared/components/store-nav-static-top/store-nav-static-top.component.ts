import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';
import { SettingService } from '../../services/setting.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-store-nav-static-top',
  templateUrl: './store-nav-static-top.component.html',
  styleUrls: ['./store-nav-static-top.component.css']
})
export class StoreNavStaticTopComponent implements OnInit {

  @Input() data: any;
  @Input() isHome: boolean = false;
  @Input() isSignIn: boolean = false;
  @Input() color = '#000000';
  @Input() isSpecialHome: boolean = false;
  isAdmin: boolean = false;
  // public isAbout: boolean = true;
  // public isCatalog: boolean = true;
  // public isCartIcon: boolean = true;


  constructor(private _router: Router, public authService: AuthService, public userService: UserService, public settingService: SettingService) { }

  ngOnInit(): void {
    this.isAdmin = this.userService.isAdmin();
  }

  jump(id: string): void {
    let pagePoint = document.getElementById(id)?.offsetTop;

    if (!environment.production)
      console.log("Scrolling To ", pagePoint);

    if (pagePoint) {
      document.body.scrollTop = pagePoint; // For Safari
      document.documentElement.scrollTop = pagePoint; // For Chrome, Firefox, IE and Opera
    }
  }

  signIn(): void {
    this._router.navigate(['identity']);
  }
  signOut(): void {
    this._router.navigate(['identity', 'bye']);
  }

  admin(): void {
    this._router.navigate(['admin']);
  }
}
