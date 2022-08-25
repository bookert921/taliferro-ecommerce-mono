import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditNameComponent } from './customer-edit-name.component';

describe('CustomerEditNameComponent', () => {
  let component: CustomerEditNameComponent;
  let fixture: ComponentFixture<CustomerEditNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
