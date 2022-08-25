import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPrintListComponent } from './appointment-print-list.component';

describe('AppointmentPrintListComponent', () => {
  let component: AppointmentPrintListComponent;
  let fixture: ComponentFixture<AppointmentPrintListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentPrintListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentPrintListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
