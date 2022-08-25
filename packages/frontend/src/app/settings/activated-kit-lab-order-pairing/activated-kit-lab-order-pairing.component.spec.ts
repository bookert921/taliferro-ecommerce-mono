import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedKitLabOrderPairingComponent } from './activated-kit-lab-order-pairing.component';

describe('ActivatedKitLabOrderPairingComponent', () => {
  let component: ActivatedKitLabOrderPairingComponent;
  let fixture: ComponentFixture<ActivatedKitLabOrderPairingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivatedKitLabOrderPairingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedKitLabOrderPairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
