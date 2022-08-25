import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-lab-order-results',
  templateUrl: './lab-order-results.component.html',
  styleUrls: ['./lab-order-results.component.css']
})
export class LabOrderResultsComponent implements OnInit {

  message: any;

  constructor(private _router:Router, private _location:Location, private _userService: UserService) { }

  ngOnInit(): void {
    if (this._userService.file)
    this.generateReport();
  else
    this.message = "No File to process";

  }

  back(): void {
    this._location.back()
  }

  generateReport(): void {
    this.message = "Results show in seperate window.";
    window.open(this._userService.file, "_blank");

  }


}
