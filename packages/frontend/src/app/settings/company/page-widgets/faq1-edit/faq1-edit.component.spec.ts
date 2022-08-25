import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faq1EditComponent } from './faq1-edit.component';

describe('Faq1EditComponent', () => {
  let component: Faq1EditComponent;
  let fixture: ComponentFixture<Faq1EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Faq1EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Faq1EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
