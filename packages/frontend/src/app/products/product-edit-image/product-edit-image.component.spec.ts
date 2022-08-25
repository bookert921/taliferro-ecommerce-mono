import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditImageComponent } from './product-edit-image.component';

describe('ProductEditImageComponent', () => {
  let component: ProductEditImageComponent;
  let fixture: ComponentFixture<ProductEditImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
