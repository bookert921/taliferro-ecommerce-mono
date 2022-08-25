import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitNumberEditComponent } from './kit-number-edit.component';

describe('KitNumberEditComponent', () => {
  let component: KitNumberEditComponent;
  let fixture: ComponentFixture<KitNumberEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitNumberEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitNumberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
