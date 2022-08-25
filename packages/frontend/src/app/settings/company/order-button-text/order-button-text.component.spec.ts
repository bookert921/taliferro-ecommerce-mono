import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderButtonTextComponent } from './order-button-text.component';

describe('OrderButtonTextComponent', () => {
  let component: OrderButtonTextComponent;
  let fixture: ComponentFixture<OrderButtonTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderButtonTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderButtonTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
