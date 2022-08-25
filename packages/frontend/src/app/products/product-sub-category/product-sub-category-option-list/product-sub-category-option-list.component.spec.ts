import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubCategoryOptionListComponent } from './product-sub-category-option-list.component';

describe('ProductSubCategoryOptionListComponent', () => {
  let component: ProductSubCategoryOptionListComponent;
  let fixture: ComponentFixture<ProductSubCategoryOptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSubCategoryOptionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSubCategoryOptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
