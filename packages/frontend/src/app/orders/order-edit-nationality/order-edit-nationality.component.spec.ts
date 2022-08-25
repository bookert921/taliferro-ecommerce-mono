import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditNationalityComponent } from './order-edit-nationality.component';

describe('OrderEditNationalityComponent', () => {
  let component: OrderEditNationalityComponent;
  let fixture: ComponentFixture<OrderEditNationalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEditNationalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEditNationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
