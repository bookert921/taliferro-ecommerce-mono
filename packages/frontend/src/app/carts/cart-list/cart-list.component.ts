import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  @Output() id = new EventEmitter();
  private _dataSubscription?: Subscription;
  public filteredData = '';
  loading: any;

  constructor(public cartService: CartService) {
    this.cartService.getAll();
  }

  ngOnInit(): void {
    this._dataSubscription = this.cartService.items?.subscribe(() => {
      this.loading = 'complete'
    })

  }

  ngOnDestroy(): void {
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
  }

  public onView(value: any): void {
    this.id.emit(value);
  }

}
