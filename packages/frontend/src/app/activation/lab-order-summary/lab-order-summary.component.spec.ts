import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabOrderSummaryComponent } from './lab-order-summary.component';

describe('LabOrderSummaryComponent', () => {
  let component: LabOrderSummaryComponent;
  let fixture: ComponentFixture<LabOrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabOrderSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
