import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditTypeComponent } from './product-edit-type.component';

describe('ProductEditTypeComponent', () => {
  let component: ProductEditTypeComponent;
  let fixture: ComponentFixture<ProductEditTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
