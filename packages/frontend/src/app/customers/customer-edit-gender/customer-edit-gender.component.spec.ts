import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditGenderComponent } from './customer-edit-gender.component';

describe('CustomerEditGenderComponent', () => {
  let component: CustomerEditGenderComponent;
  let fixture: ComponentFixture<CustomerEditGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
