import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingAboutProduct1Component } from './marketing-about-product1.component';

describe('MarketingAboutProduct1Component', () => {
  let component: MarketingAboutProduct1Component;
  let fixture: ComponentFixture<MarketingAboutProduct1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingAboutProduct1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingAboutProduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
