import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineBoxNavComponent } from './inline-box-nav.component';

describe('InlineBoxNavComponent', () => {
  let component: InlineBoxNavComponent;
  let fixture: ComponentFixture<InlineBoxNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineBoxNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineBoxNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
