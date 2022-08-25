import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCollectionTimeEditComponent } from './sample-collection-time-edit.component';

describe('SampleCollectionTimeEditComponent', () => {
  let component: SampleCollectionTimeEditComponent;
  let fixture: ComponentFixture<SampleCollectionTimeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleCollectionTimeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCollectionTimeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
