import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditPersonalComponent } from './customer-edit-personal.component';

describe('CustomerEditPersonalComponent', () => {
  let component: CustomerEditPersonalComponent;
  let fixture: ComponentFixture<CustomerEditPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
