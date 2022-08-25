import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditNameComponent } from './product-edit-name.component';

describe('ProductEditNameComponent', () => {
  let component: ProductEditNameComponent;
  let fixture: ComponentFixture<ProductEditNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
