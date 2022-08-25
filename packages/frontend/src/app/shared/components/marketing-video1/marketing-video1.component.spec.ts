import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingVideo1Component } from './marketing-video1.component';

describe('MarketingVideo1Component', () => {
  let component: MarketingVideo1Component;
  let fixture: ComponentFixture<MarketingVideo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingVideo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingVideo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
