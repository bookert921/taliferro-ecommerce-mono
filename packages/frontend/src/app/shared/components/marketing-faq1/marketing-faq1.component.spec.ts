import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFaq1Component } from './marketing-faq1.component';

describe('MarketingFaq1Component', () => {
  let component: MarketingFaq1Component;
  let fixture: ComponentFixture<MarketingFaq1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingFaq1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingFaq1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
