import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ColorsService } from '../../services/colors.service';
import { SettingService } from '../../services/setting.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-marketing-video1',
  templateUrl: './marketing-video1.component.html',
  styleUrls: ['./marketing-video1.component.css']
})
export class MarketingVideo1Component implements OnInit {

  @Input() data: any;
  @Input() background = '#000000';
  colorBlock = "#ffffff";
  videoURL: any;

  constructor(public domSanitizer: DomSanitizer, public userService: UserService, public colorService: ColorsService, public settingService: SettingService) { }

  ngOnInit(): void {
    setTimeout(() => { this.lookForVideo() }, 2000);
    this.colorBlock = ColorsService.hexToRGBByPercent(this.background, 0.01);

  }

  lookForVideo(): void {
    if (this.data && this.data.video1 && this.data.video1.videoID) {
      this.videoURL = 'https://www.youtube.com/embed/' + this.data.video1.videoID;
      this.videoURL = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
    }
  }

}
