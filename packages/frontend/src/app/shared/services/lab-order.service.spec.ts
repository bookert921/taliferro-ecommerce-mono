import { TestBed } from '@angular/core/testing';

import { LabOrderService } from './lab-order.service';

describe('LabOrderService', () => {
  let service: LabOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
