import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ColorsService } from '../../services/colors.service';
import { SettingService } from '../../services/setting.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-marketing-video2',
  templateUrl: './marketing-video2.component.html',
  styleUrls: ['./marketing-video2.component.css']
})
export class MarketingVideo2Component implements OnInit {

  @Input() data: any;
  @Input() background = '#000000';
  videoURL: any;


  constructor(public domSanitizer: DomSanitizer, public userService: UserService, public colorService: ColorsService, public settingsService: SettingService) { }

  ngOnInit(): void {
    if (this.data && this.data.video2 && this.data.video2.videoURL)
      this.videoURL = this.domSanitizer.bypassSecurityTrustResourceUrl(this.data.video2.videoURL);
  }

}
