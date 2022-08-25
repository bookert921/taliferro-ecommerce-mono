import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  constructor(public colorService: ColorsService) { }

  ngOnInit(): void {
  }

}
