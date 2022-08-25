import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFeatures1Component } from './marketing-features1.component';

describe('MarketingFeatures1Component', () => {
  let component: MarketingFeatures1Component;
  let fixture: ComponentFixture<MarketingFeatures1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingFeatures1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingFeatures1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
