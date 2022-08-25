import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditTitleComponent } from './customer-edit-title.component';

describe('CustomerEditTitleComponent', () => {
  let component: CustomerEditTitleComponent;
  let fixture: ComponentFixture<CustomerEditTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
