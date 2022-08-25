import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditCreditComponent } from './customer-edit-credit.component';

describe('CustomerEditCreditComponent', () => {
  let component: CustomerEditCreditComponent;
  let fixture: ComponentFixture<CustomerEditCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
