import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditSsnComponent } from './order-edit-ssn.component';

describe('OrderEditSsnComponent', () => {
  let component: OrderEditSsnComponent;
  let fixture: ComponentFixture<OrderEditSsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEditSsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEditSsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
