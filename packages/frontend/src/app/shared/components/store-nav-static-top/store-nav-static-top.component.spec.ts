import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreNavStaticTopComponent } from './store-nav-static-top.component';

describe('StoreNavStaticTopComponent', () => {
  let component: StoreNavStaticTopComponent;
  let fixture: ComponentFixture<StoreNavStaticTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreNavStaticTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreNavStaticTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
