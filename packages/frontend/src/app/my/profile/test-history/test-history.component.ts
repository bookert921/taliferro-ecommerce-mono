import { Component, OnInit,  Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-history',
  templateUrl: './test-history.component.html',
  styleUrls: ['./test-history.component.css']
})
export class TestHistoryComponent implements OnInit {

  @Output() done = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  complete(): void {
    this.done.emit();
  }


}
