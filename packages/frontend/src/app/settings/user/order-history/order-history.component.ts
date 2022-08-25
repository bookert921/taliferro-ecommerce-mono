import { Component, OnInit, Output,  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  @Output() done = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  complete(): void {
    this.done.emit();
  }


}
