import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcInfoComponent } from './cc-info.component';

describe('CcInfoComponent', () => {
  let component: CcInfoComponent;
  let fixture: ComponentFixture<CcInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
