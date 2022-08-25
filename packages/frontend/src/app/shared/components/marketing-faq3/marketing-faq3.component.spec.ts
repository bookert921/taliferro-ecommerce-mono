import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFaq3Component } from './marketing-faq3.component';

describe('MarketingFaq3Component', () => {
  let component: MarketingFaq3Component;
  let fixture: ComponentFixture<MarketingFaq3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingFaq3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingFaq3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
