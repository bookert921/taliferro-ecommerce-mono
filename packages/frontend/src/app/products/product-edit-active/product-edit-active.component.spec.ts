import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditActiveComponent } from './product-edit-active.component';

describe('ProductEditActiveComponent', () => {
  let component: ProductEditActiveComponent;
  let fixture: ComponentFixture<ProductEditActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
