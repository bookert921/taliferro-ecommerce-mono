import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Features4EditComponent } from './features4-edit.component';

describe('Features4EditComponent', () => {
  let component: Features4EditComponent;
  let fixture: ComponentFixture<Features4EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Features4EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Features4EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
