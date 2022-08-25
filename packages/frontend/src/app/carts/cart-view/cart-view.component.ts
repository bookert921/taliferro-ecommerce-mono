import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  @Input() data: any;
  @Output() editItem=  new EventEmitter();

  constructor(public colorService: ColorsService, private _dataService:DataService) { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this._dataService.delete(environment.CARTS, this.data._id);
  }

}
