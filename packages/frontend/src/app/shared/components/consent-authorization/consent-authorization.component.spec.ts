import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentAuthorizationComponent } from './consent-authorization.component';

describe('ConsentAuthorizationComponent', () => {
  let component: ConsentAuthorizationComponent;
  let fixture: ComponentFixture<ConsentAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsentAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
