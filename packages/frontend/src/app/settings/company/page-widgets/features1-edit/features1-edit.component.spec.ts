import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Features1EditComponent } from './features1-edit.component';

describe('Features1EditComponent', () => {
  let component: Features1EditComponent;
  let fixture: ComponentFixture<Features1EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Features1EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Features1EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
