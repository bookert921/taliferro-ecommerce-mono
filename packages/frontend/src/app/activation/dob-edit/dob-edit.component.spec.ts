import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobEditComponent } from './dob-edit.component';

describe('DobEditComponent', () => {
  let component: DobEditComponent;
  let fixture: ComponentFixture<DobEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DobEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DobEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
