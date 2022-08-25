import { Component, OnInit, Input } from '@angular/core';
import { ColorsService } from '../../services/colors.service';
import { SettingService } from '../../services/setting.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-marketing-features2',
  templateUrl: './marketing-features2.component.html',
  styleUrls: ['./marketing-features2.component.css']
})
export class MarketingFeatures2Component implements OnInit {

  @Input() data: any;
  @Input() background = '#000000';
  colorBlock: any;


  constructor(public userService: UserService, public colorService: ColorsService, public settingService: SettingService) { }

  ngOnInit(): void {
    this.colorBlock = ColorsService.hexToRGBByPercent(this.background, 0.04);
  }

}
