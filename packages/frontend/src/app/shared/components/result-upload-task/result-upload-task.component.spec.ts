import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultUploadTaskComponent } from './result-upload-task.component';

describe('ResultUploadTaskComponent', () => {
  let component: ResultUploadTaskComponent;
  let fixture: ComponentFixture<ResultUploadTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultUploadTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultUploadTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
