import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faq2EditComponent } from './faq2-edit.component';

describe('Faq2EditComponent', () => {
  let component: Faq2EditComponent;
  let fixture: ComponentFixture<Faq2EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Faq2EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Faq2EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
