import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditStockComponent } from './product-edit-stock.component';

describe('ProductEditStockComponent', () => {
  let component: ProductEditStockComponent;
  let fixture: ComponentFixture<ProductEditStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
