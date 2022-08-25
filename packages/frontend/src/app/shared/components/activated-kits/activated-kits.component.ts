import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ColorsService } from '../../services/colors.service';
import { LabOrderService } from '../../services/lab-order.service';

@Component({
  selector: 'app-activated-kits',
  templateUrl: './activated-kits.component.html',
  styleUrls: ['./activated-kits.component.css']
})
export class ActivatedKitsComponent implements OnInit {

  @Output() id = new EventEmitter();
  @Input() data: any;
  filteredData = '';

  constructor(public labOrderService: LabOrderService, public colorService: ColorsService) { }

  ngOnInit(): void {
    this.labOrderService.getAllByStatus('Activated');
  }

  public onView(value: any): void {
    this.id.emit(value);
  }


}
