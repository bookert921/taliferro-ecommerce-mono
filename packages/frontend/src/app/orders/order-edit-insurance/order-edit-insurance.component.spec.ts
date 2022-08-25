import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditInsuranceComponent } from './order-edit-insurance.component';

describe('OrderEditInsuranceComponent', () => {
  let component: OrderEditInsuranceComponent;
  let fixture: ComponentFixture<OrderEditInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEditInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEditInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
