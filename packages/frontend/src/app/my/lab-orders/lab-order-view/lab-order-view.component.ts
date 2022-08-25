import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-lab-order-view',
  templateUrl: './lab-order-view.component.html',
  styleUrls: ['./lab-order-view.component.css']
})
export class LabOrderViewComponent implements OnInit {

  @Input() data: any;
  @Output() close = new EventEmitter();

  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.close.emit('close');
  }

  onLabOrderResultsClick(url: any) {
    this._userService.file = url;
    this._router.navigate(['lab-order-results']);
  }


}
