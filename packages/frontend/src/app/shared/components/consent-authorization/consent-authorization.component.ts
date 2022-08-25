import { Component, OnInit, Input } from '@angular/core';
import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'app-consent-authorization',
  templateUrl: './consent-authorization.component.html',
  styleUrls: ['./consent-authorization.component.css']
})
export class ConsentAuthorizationComponent implements OnInit {

  @Input() companySettings: any;

  constructor(public colorService: ColorsService) { }

  ngOnInit(): void {
  }

}
