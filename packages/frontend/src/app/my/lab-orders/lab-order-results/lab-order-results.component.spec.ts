import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabOrderResultsComponent } from './lab-order-results.component';

describe('LabOrderResultsComponent', () => {
  let component: LabOrderResultsComponent;
  let fixture: ComponentFixture<LabOrderResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabOrderResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabOrderResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
