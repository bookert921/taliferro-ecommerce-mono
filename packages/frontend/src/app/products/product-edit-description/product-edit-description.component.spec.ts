import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditDescriptionComponent } from './product-edit-description.component';

describe('ProductEditDescriptionComponent', () => {
  let component: ProductEditDescriptionComponent;
  let fixture: ComponentFixture<ProductEditDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
