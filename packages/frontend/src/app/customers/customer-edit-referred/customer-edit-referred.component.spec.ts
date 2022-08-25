import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditReferredComponent } from './customer-edit-referred.component';

describe('CustomerEditReferredComponent', () => {
  let component: CustomerEditReferredComponent;
  let fixture: ComponentFixture<CustomerEditReferredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditReferredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditReferredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
