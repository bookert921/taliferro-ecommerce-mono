import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditDimensionsComponent } from './product-edit-dimensions.component';

describe('ProductEditDimensionsComponent', () => {
  let component: ProductEditDimensionsComponent;
  let fixture: ComponentFixture<ProductEditDimensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditDimensionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
