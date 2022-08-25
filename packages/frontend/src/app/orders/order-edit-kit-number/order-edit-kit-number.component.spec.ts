import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditKitNumberComponent } from './order-edit-kit-number.component';

describe('OrderEditKitNumberComponent', () => {
  let component: OrderEditKitNumberComponent;
  let fixture: ComponentFixture<OrderEditKitNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEditKitNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEditKitNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
