import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ColorsService } from '../../services/colors.service';
import { SettingService } from '../../services/setting.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-marketing-features1',
  templateUrl: './marketing-features1.component.html',
  styleUrls: ['./marketing-features1.component.css']
})
export class MarketingFeatures1Component implements OnInit {


  @Input() data: any;
  @Input() background = '#000000';
  colorBlock: any;

  constructor(private _router: Router, public userService: UserService, public colorService: ColorsService, public settingService: SettingService) { }

  ngOnInit(): void {
    this.colorBlock = ColorsService.hexToRGBByPercent(this.background, 0.04);

  }

  gotoPage(link: string) {
    this._router.navigate([link]);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
