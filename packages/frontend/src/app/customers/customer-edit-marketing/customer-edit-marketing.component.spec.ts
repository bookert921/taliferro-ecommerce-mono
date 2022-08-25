import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditMarketingComponent } from './customer-edit-marketing.component';

describe('CustomerEditMarketingComponent', () => {
  let component: CustomerEditMarketingComponent;
  let fixture: ComponentFixture<CustomerEditMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
