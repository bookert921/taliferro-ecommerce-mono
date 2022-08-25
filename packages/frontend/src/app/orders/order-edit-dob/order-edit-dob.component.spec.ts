import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditDobComponent } from './order-edit-dob.component';

describe('OrderEditDobComponent', () => {
  let component: OrderEditDobComponent;
  let fixture: ComponentFixture<OrderEditDobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEditDobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEditDobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
