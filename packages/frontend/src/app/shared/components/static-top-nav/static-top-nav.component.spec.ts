import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTopNavComponent } from './static-top-nav.component';

describe('StaticTopNavComponent', () => {
  let component: StaticTopNavComponent;
  let fixture: ComponentFixture<StaticTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticTopNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
