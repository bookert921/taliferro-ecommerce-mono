import { Component, OnInit, Input } from '@angular/core';
import { ColorsService } from '../../services/colors.service';
import { SettingService } from '../../services/setting.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-marketing-about-product1',
  templateUrl: './marketing-about-product1.component.html',
  styleUrls: ['./marketing-about-product1.component.css']
})
export class MarketingAboutProduct1Component implements OnInit {

  @Input() data: any;
  @Input() background = '#000000';
  colorBlock: any;

  constructor(public userService: UserService, public colorService: ColorsService, public settingService: SettingService) { }

  ngOnInit(): void {
    this.colorBlock = ColorsService.hexToRGBByPercent(this.background, 0.04);
  }

}
