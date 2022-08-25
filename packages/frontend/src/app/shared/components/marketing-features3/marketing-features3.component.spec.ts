import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFeatures3Component } from './marketing-features3.component';

describe('MarketingFeatures3Component', () => {
  let component: MarketingFeatures3Component;
  let fixture: ComponentFixture<MarketingFeatures3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingFeatures3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingFeatures3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
