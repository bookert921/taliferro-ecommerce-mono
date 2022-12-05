import { Component, OnInit, Input } from '@angular/core';
import { ColorsService } from '../../services/colors.service';
import { UserService } from '../../services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css']
})
export class HomeSectionComponent implements OnInit {

  @Input() data: any;
  @Input() background: any;
  @Input() imageIndex: number = 0;

  constructor(public colorService: ColorsService, public userService: UserService) { }

  ngOnInit(): void {

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



}
