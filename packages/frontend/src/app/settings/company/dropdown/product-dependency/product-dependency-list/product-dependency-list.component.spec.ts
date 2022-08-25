import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDependencyListComponent } from './product-dependency-list.component';

describe('ProductDependencyListComponent', () => {
  let component: ProductDependencyListComponent;
  let fixture: ComponentFixture<ProductDependencyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDependencyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDependencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
