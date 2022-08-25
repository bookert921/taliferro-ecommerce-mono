import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingAboutProduct3Component } from './marketing-about-product3.component';

describe('MarketingAboutProduct3Component', () => {
  let component: MarketingAboutProduct3Component;
  let fixture: ComponentFixture<MarketingAboutProduct3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingAboutProduct3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingAboutProduct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
