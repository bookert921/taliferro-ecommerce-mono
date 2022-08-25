import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditStatusComponent } from './order-edit-status.component';

describe('OrderEditStatusComponent', () => {
  let component: OrderEditStatusComponent;
  let fixture: ComponentFixture<OrderEditStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEditStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEditStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
