import { Component, OnInit, Input } from '@angular/core';
import { SettingService } from 'src/app/shared/services/setting.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-appointment-print-list',
  templateUrl: './appointment-print-list.component.html',
  styleUrls: ['./appointment-print-list.component.css']
})
export class AppointmentPrintListComponent implements OnInit {

  @Input() data: any;

  constructor(public userService: UserService, public settingService: SettingService) { }

  ngOnInit(): void {
  }

}
