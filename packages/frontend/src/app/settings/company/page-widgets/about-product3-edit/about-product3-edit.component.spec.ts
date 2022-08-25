import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProduct3EditComponent } from './about-product3-edit.component';

describe('AboutProduct3EditComponent', () => {
  let component: AboutProduct3EditComponent;
  let fixture: ComponentFixture<AboutProduct3EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutProduct3EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutProduct3EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
