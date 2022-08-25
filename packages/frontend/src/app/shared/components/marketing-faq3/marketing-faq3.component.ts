import { Component, OnInit, Input } from '@angular/core';
import { ColorsService } from '../../services/colors.service';
import { SettingService } from '../../services/setting.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-marketing-faq3',
  templateUrl: './marketing-faq3.component.html',
  styleUrls: ['./marketing-faq3.component.css']
})
export class MarketingFaq3Component implements OnInit {

  @Input() data: any;
  @Input() background = '#000000';
  colorBlock: any;


  constructor(public userService: UserService, public colorService: ColorsService, public settingService: SettingService) { }

  ngOnInit(): void {
    this.colorBlock = ColorsService.hexToRGBByPercent(this.background, 0.04);
  }

}
