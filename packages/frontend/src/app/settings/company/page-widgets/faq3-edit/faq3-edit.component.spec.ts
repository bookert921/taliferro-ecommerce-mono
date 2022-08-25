import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faq3EditComponent } from './faq3-edit.component';

describe('Faq3EditComponent', () => {
  let component: Faq3EditComponent;
  let fixture: ComponentFixture<Faq3EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Faq3EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Faq3EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
