import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Features3EditComponent } from './features3-edit.component';

describe('Features3EditComponent', () => {
  let component: Features3EditComponent;
  let fixture: ComponentFixture<Features3EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Features3EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Features3EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
