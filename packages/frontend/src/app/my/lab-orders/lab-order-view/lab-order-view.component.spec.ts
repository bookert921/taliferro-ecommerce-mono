import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabOrderViewComponent } from './lab-order-view.component';

describe('LabOrderViewComponent', () => {
  let component: LabOrderViewComponent;
  let fixture: ComponentFixture<LabOrderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabOrderViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
