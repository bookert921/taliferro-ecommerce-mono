import { TestBed } from '@angular/core/testing';

import { TestKitService } from './test-kit.service';

describe('TestKitService', () => {
  let service: TestKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
