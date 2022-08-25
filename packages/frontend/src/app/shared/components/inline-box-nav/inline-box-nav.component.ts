import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-inline-box-nav',
  templateUrl: './inline-box-nav.component.html',
  styleUrls: ['./inline-box-nav.component.css']
})
export class InlineBoxNavComponent implements OnInit {

  @Input() data: any;
  @Input() isHome: boolean = false;
  @Input() isSignIn: boolean = false;
  @Input() color = '#000000';
  @Input() isSpecialHome : boolean = false;
  public isAbout: boolean =true;
  public isCatalog: boolean = true;
  public isCartIcon: boolean = true;

  constructor(private _router:Router, public settingService: SettingService, public authService: AuthService, public userService: UserService) { }

  ngOnInit(): void {
    this.isAbout = (document.getElementById("about") ? true : false)
    this.isCatalog = (document.getElementById("catalog") ? true : false)
    this.isCartIcon = (document.getElementById("cart") ? true : false)
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
    this._router.navigate(['identity','bye']);
  }

  admin(): void {
    this._router.navigate(['admin']);
  }

}
