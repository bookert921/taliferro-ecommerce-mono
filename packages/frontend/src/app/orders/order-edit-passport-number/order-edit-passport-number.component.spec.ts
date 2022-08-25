import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditPassportNumberComponent } from './order-edit-passport-number.component';

describe('OrderEditPassportNumberComponent', () => {
  let component: OrderEditPassportNumberComponent;
  let fixture: ComponentFixture<OrderEditPassportNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEditPassportNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEditPassportNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
