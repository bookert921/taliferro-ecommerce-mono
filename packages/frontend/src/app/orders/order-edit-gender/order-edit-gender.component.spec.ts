import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditGenderComponent } from './order-edit-gender.component';

describe('OrderEditGenderComponent', () => {
  let component: OrderEditGenderComponent;
  let fixture: ComponentFixture<OrderEditGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEditGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEditGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
