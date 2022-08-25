import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobComponent } from './dob.component';

describe('DobComponent', () => {
  let component: DobComponent;
  let fixture: ComponentFixture<DobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
