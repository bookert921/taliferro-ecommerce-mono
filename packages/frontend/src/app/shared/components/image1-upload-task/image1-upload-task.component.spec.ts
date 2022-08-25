import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image1UploadTaskComponent } from './image1-upload-task.component';

describe('Image1UploadTaskComponent', () => {
  let component: Image1UploadTaskComponent;
  let fixture: ComponentFixture<Image1UploadTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Image1UploadTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Image1UploadTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
