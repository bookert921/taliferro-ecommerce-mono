import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditVaccinatedComponent } from './order-edit-vaccinated.component';

describe('OrderEditVaccinatedComponent', () => {
  let component: OrderEditVaccinatedComponent;
  let fixture: ComponentFixture<OrderEditVaccinatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEditVaccinatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEditVaccinatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
