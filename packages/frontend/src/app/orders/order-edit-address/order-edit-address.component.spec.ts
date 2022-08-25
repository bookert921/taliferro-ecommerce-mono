import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditAddressComponent } from './order-edit-address.component';

describe('OrderEditAddressComponent', () => {
  let component: OrderEditAddressComponent;
  let fixture: ComponentFixture<OrderEditAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEditAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
