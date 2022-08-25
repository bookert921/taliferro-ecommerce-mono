import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  @Input() data: any;
  @Output() editItem=  new EventEmitter();
  @Input() isDiagnostic: boolean = false;


  constructor() { }

  onClose(): void {
    this.editItem.emit('close');
  }

  ngOnInit(): void {
  }

  onGender(): void {
    this.editItem.emit('gender');
  }

  onDob(): void {
    this.editItem.emit('dob');
  }

  setDiagnostic(): void {
    this.editItem.emit('diagnostic');
  }

  onType(): void {
    this.editItem.emit('type');
  }

  onImage(): void {
    this.editItem.emit('image');
  }

  onStatus(): void {
    this.editItem.emit('status');
  }

  onEmail(): void {
    this.editItem.emit('email');
  }

  onName(): void {
    this.editItem.emit('name');
  }

  onPhone(): void {
    this.editItem.emit('phone');
  }

  onAddress(): void {
    this.editItem.emit('address');
  }

  onPersonal(): void {
    this.editItem.emit('perosnal');
  }


  onCreditCard(): void {
    this.editItem.emit('credit');
  }

  onTitle(): void {
    this.editItem.emit('title');
  }

}
