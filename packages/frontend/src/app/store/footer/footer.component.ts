import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() data: any;
  public year: any;

  constructor() { }

  ngOnInit(): void {
    let today = new Date();
    this.year = today.getFullYear();
  }

}
