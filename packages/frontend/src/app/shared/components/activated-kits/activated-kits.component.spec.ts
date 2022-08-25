import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedKitsComponent } from './activated-kits.component';

describe('ActivatedKitsComponent', () => {
  let component: ActivatedKitsComponent;
  let fixture: ComponentFixture<ActivatedKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivatedKitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
