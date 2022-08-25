import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCartsListComponent } from './saved-carts-list.component';

describe('SavedCartsListComponent', () => {
  let component: SavedCartsListComponent;
  let fixture: ComponentFixture<SavedCartsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedCartsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCartsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
