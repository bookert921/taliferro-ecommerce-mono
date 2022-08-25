import { TestBed } from '@angular/core/testing';

import { DependencyCodeService } from './dependency-code.service';

describe('DependencyCodeService', () => {
  let service: DependencyCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependencyCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
