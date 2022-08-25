import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditSkuComponent } from './product-edit-sku.component';

describe('ProductEditSkuComponent', () => {
  let component: ProductEditSkuComponent;
  let fixture: ComponentFixture<ProductEditSkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditSkuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
