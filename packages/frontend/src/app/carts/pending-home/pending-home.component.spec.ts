import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingHomeComponent } from './pending-home.component';

describe('PendingHomeComponent', () => {
  let component: PendingHomeComponent;
  let fixture: ComponentFixture<PendingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
