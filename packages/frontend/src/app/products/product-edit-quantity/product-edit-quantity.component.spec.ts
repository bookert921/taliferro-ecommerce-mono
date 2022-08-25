import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditQuantityComponent } from './product-edit-quantity.component';

describe('ProductEditQuantityComponent', () => {
  let component: ProductEditQuantityComponent;
  let fixture: ComponentFixture<ProductEditQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
