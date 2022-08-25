import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDependencyEditComponent } from './product-dependency-edit.component';

describe('ProductDependencyEditComponent', () => {
  let component: ProductDependencyEditComponent;
  let fixture: ComponentFixture<ProductDependencyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDependencyEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDependencyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
