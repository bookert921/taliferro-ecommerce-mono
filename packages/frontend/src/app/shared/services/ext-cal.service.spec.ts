import { TestBed } from '@angular/core/testing';

import { ExtCalService } from './ext-cal.service';

describe('ExtCalService', () => {
  let service: ExtCalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtCalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
