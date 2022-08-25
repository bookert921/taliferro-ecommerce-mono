import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditLisNumberComponent } from './order-edit-lis-number.component';

describe('OrderEditLisNumberComponent', () => {
  let component: OrderEditLisNumberComponent;
  let fixture: ComponentFixture<OrderEditLisNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEditLisNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEditLisNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
