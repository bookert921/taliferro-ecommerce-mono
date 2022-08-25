import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Features2EditComponent } from './features2-edit.component';

describe('Features2EditComponent', () => {
  let component: Features2EditComponent;
  let fixture: ComponentFixture<Features2EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Features2EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Features2EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
