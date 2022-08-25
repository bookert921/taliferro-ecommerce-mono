import { Component, Input, OnInit } from '@angular/core';
import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.css']
})
export class TermsOfServiceComponent implements OnInit {

  @Input() companySettings: any;

  constructor(public colorService: ColorsService) { }

  ngOnInit(): void {
  }

}
