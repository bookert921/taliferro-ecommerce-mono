import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditPhoneNumberComponent } from './order-edit-phone-number.component';

describe('OrderEditPhoneNumberComponent', () => {
  let component: OrderEditPhoneNumberComponent;
  let fixture: ComponentFixture<OrderEditPhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEditPhoneNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEditPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
