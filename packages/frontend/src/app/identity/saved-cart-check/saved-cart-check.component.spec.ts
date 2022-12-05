import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCartCheckComponent } from './saved-cart-check.component';

describe('SavedCartCheckComponent', () => {
  let component: SavedCartCheckComponent;
  let fixture: ComponentFixture<SavedCartCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedCartCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCartCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
