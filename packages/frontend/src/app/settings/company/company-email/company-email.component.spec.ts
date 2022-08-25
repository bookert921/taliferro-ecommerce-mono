import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEmailComponent } from './company-email.component';

describe('CompanyEmailComponent', () => {
  let component: CompanyEmailComponent;
  let fixture: ComponentFixture<CompanyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
