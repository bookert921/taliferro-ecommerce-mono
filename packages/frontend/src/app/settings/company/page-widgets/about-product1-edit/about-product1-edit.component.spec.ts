import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProduct1EditComponent } from './about-product1-edit.component';

describe('AboutProduct1EditComponent', () => {
  let component: AboutProduct1EditComponent;
  let fixture: ComponentFixture<AboutProduct1EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutProduct1EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutProduct1EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
