import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() isHome: boolean = false;
  @Input() isSignIn: boolean = false;
  @Input() company: any;
  @Input() color = '#000000';
  @Input() isSpecialHome: boolean = false;
  public isFirebaseUser: boolean = false;

  constructor(public authService: AuthService, public userService:UserService) {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }


}
