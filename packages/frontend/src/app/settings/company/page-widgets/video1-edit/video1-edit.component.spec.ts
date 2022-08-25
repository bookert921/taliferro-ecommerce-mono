import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Video1EditComponent } from './video1-edit.component';

describe('Video1EditComponent', () => {
  let component: Video1EditComponent;
  let fixture: ComponentFixture<Video1EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Video1EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Video1EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
