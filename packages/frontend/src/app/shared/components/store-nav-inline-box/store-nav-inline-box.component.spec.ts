import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreNavInlineBoxComponent } from './store-nav-inline-box.component';

describe('StoreNavInlineBoxComponent', () => {
  let component: StoreNavInlineBoxComponent;
  let fixture: ComponentFixture<StoreNavInlineBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreNavInlineBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreNavInlineBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
