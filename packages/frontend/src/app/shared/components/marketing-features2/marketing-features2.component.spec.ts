import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFeatures2Component } from './marketing-features2.component';

describe('MarketingFeatures2Component', () => {
  let component: MarketingFeatures2Component;
  let fixture: ComponentFixture<MarketingFeatures2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingFeatures2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingFeatures2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
