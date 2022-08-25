import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubTypeEditComponent } from './product-sub-type-edit.component';

describe('ProductSubTypeEditComponent', () => {
  let component: ProductSubTypeEditComponent;
  let fixture: ComponentFixture<ProductSubTypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSubTypeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSubTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
