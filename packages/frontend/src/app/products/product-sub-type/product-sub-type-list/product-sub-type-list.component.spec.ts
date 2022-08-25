import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubTypeListComponent } from './product-sub-type-list.component';

describe('ProductSubTypeListComponent', () => {
  let component: ProductSubTypeListComponent;
  let fixture: ComponentFixture<ProductSubTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSubTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSubTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
