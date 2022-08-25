import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingVideo2Component } from './marketing-video2.component';

describe('MarketingVideo2Component', () => {
  let component: MarketingVideo2Component;
  let fixture: ComponentFixture<MarketingVideo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingVideo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingVideo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
