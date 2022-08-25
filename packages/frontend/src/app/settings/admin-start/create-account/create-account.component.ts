import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SettingService } from 'src/app/shared/services/setting.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  companyName: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  companyId: string = '';
  message: any;

  constructor(public userService: UserService, public settingService: SettingService, public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.newSettings();
  }

  private newSettings(): void {
    if (this.userService.user) {
      let data = {
        companyName: this.companyName,
        uid: (this.userService.user) ? this.userService.user._id : this.authService.firebaseUser?.uid,
      }

      let storeID = this.settingService.newStoreSetting(data);
      this.settingService.settings = data;

      this.userService.user.companyId = storeID;
      this.userService.update();

      this.message = "e-Commerce store Successfully Created."

    } else {
      this.message = "Unable to process, contact support.";

    }

    setTimeout(() => {
      this.message = undefined
    }, 10000)
  }

}
