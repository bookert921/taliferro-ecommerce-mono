import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTypeComponent } from './site-type.component';

describe('SiteTypeComponent', () => {
  let component: SiteTypeComponent;
  let fixture: ComponentFixture<SiteTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
