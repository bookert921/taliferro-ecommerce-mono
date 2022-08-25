import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditSubCategoryOptionComponent } from './product-edit-sub-category-option.component';

describe('ProductEditSubCategoryOptionComponent', () => {
  let component: ProductEditSubCategoryOptionComponent;
  let fixture: ComponentFixture<ProductEditSubCategoryOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditSubCategoryOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditSubCategoryOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
