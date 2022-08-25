import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditManufacturerComponent } from './product-edit-manufacturer.component';

describe('ProductEditManufacturerComponent', () => {
  let component: ProductEditManufacturerComponent;
  let fixture: ComponentFixture<ProductEditManufacturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditManufacturerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
