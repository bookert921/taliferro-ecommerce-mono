import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySectionsComponent } from './company-sections.component';

describe('CompanySectionsComponent', () => {
  let component: CompanySectionsComponent;
  let fixture: ComponentFixture<CompanySectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
