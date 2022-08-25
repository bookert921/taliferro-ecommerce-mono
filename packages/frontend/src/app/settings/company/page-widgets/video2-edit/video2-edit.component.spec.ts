import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Video2EditComponent } from './video2-edit.component';

describe('Video2EditComponent', () => {
  let component: Video2EditComponent;
  let fixture: ComponentFixture<Video2EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Video2EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Video2EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
