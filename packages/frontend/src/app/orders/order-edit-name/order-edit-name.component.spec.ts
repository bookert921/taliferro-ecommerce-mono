import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditNameComponent } from './order-edit-name.component';

describe('OrderEditNameComponent', () => {
  let component: OrderEditNameComponent;
  let fixture: ComponentFixture<OrderEditNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEditNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEditNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
