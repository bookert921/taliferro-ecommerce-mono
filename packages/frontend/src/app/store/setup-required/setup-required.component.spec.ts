import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupRequiredComponent } from './setup-required.component';

describe('SetupRequiredComponent', () => {
  let component: SetupRequiredComponent;
  let fixture: ComponentFixture<SetupRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupRequiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
