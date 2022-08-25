import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.css']
})
export class UnderConstructionComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this._location.back()
  }


}
