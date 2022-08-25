import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-pending-home',
  templateUrl: './pending-home.component.html',
  styleUrls: ['./pending-home.component.css']
})
export class PendingHomeComponent implements OnInit {

  public data: any;
  public isEditMode: boolean = false;
  public production: boolean = false;

  constructor(private _location: Location, public colorService: ColorsService) { }

  ngOnInit(): void {
  }

  back(): void {
    this._location.back()
  }

  list(): void {
    this.isEditMode = false;
  }

  onView(data: any) {
    this.isEditMode = true;
    this.data = data;
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    if (!environment.production)
      console.log("Pending Cart", this.data);
  }


}
