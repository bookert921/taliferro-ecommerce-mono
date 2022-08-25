import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourStoreUnderConstructionComponent } from './your-store-under-construction.component';

describe('YourStoreUnderConstructionComponent', () => {
  let component: YourStoreUnderConstructionComponent;
  let fixture: ComponentFixture<YourStoreUnderConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourStoreUnderConstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourStoreUnderConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
