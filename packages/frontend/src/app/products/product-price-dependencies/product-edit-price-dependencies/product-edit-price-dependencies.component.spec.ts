import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditPriceDependenciesComponent } from './product-edit-price-dependencies.component';

describe('ProductEditPriceDependenciesComponent', () => {
  let component: ProductEditPriceDependenciesComponent;
  let fixture: ComponentFixture<ProductEditPriceDependenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditPriceDependenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditPriceDependenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
