import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditDobComponent } from './customer-edit-dob.component';

describe('CustomerEditDobComponent', () => {
  let component: CustomerEditDobComponent;
  let fixture: ComponentFixture<CustomerEditDobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditDobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditDobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
