import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image2UploadTaskComponent } from './image2-upload-task.component';

describe('Image2UploadTaskComponent', () => {
  let component: Image2UploadTaskComponent;
  let fixture: ComponentFixture<Image2UploadTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Image2UploadTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Image2UploadTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
