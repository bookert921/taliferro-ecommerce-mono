import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubTypeComponent } from './product-sub-type.component';

describe('ProductSubTypeComponent', () => {
  let component: ProductSubTypeComponent;
  let fixture: ComponentFixture<ProductSubTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSubTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
