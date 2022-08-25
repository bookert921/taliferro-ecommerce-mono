import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingAboutProduct2Component } from './marketing-about-product2.component';

describe('MarketingAboutProduct2Component', () => {
  let component: MarketingAboutProduct2Component;
  let fixture: ComponentFixture<MarketingAboutProduct2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingAboutProduct2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingAboutProduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
