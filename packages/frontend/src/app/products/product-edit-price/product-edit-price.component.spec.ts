import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditPriceComponent } from './product-edit-price.component';

describe('ProductEditPriceComponent', () => {
  let component: ProductEditPriceComponent;
  let fixture: ComponentFixture<ProductEditPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
