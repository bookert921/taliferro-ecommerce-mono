import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFaq2Component } from './marketing-faq2.component';

describe('MarketingFaq2Component', () => {
  let component: MarketingFaq2Component;
  let fixture: ComponentFixture<MarketingFaq2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingFaq2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingFaq2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
