import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowTo1Component } from './how-to1.component';

describe('HowTo1Component', () => {
  let component: HowTo1Component;
  let fixture: ComponentFixture<HowTo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowTo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowTo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
