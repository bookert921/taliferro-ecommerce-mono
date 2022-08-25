import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceDependenciesListComponent } from './product-price-dependencies-list.component';

describe('ProductPriceDependenciesListComponent', () => {
  let component: ProductPriceDependenciesListComponent;
  let fixture: ComponentFixture<ProductPriceDependenciesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPriceDependenciesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceDependenciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
