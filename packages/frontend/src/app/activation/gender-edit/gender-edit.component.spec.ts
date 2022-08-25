import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderEditComponent } from './gender-edit.component';

describe('GenderEditComponent', () => {
  let component: GenderEditComponent;
  let fixture: ComponentFixture<GenderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
