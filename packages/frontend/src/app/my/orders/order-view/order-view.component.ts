import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ShoppingCart } from 'src/app/shared/data/shopping-cart.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  @Input() data?: any;
  @Output() close = new EventEmitter();
  

  constructor() {
    
  }

  ngOnInit(): void {
    if (!environment.production)
      console.log("OrderViewComponent", this.data);
  }

  onClose(): void {
    this.close.emit('close');
  }



}
