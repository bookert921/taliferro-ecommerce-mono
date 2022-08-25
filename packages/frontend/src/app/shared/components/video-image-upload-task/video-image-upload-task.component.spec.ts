import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoImageUploadTaskComponent } from './video-image-upload-task.component';

describe('VideoImageUploadTaskComponent', () => {
  let component: VideoImageUploadTaskComponent;
  let fixture: ComponentFixture<VideoImageUploadTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoImageUploadTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoImageUploadTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
