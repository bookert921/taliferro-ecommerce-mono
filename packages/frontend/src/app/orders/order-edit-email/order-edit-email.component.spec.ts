import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditEmailComponent } from './order-edit-email.component';

describe('OrderEditEmailComponent', () => {
  let component: OrderEditEmailComponent;
  let fixture: ComponentFixture<OrderEditEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEditEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEditEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
