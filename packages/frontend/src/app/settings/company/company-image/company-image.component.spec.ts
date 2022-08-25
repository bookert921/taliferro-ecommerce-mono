import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyImageComponent } from './company-image.component';

describe('CompanyImageComponent', () => {
  let component: CompanyImageComponent;
  let fixture: ComponentFixture<CompanyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
