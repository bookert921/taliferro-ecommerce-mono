import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadTaskComponent } from './image-upload-task.component';

describe('ImageUploadTaskComponent', () => {
  let component: ImageUploadTaskComponent;
  let fixture: ComponentFixture<ImageUploadTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploadTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
