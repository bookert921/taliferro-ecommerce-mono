import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProduct2EditComponent } from './about-product2-edit.component';

describe('AboutProduct2EditComponent', () => {
  let component: AboutProduct2EditComponent;
  let fixture: ComponentFixture<AboutProduct2EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutProduct2EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutProduct2EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
