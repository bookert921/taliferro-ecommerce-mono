import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitActivationComponent } from './kit-activation.component';

describe('KitActivationComponent', () => {
  let component: KitActivationComponent;
  let fixture: ComponentFixture<KitActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitActivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
