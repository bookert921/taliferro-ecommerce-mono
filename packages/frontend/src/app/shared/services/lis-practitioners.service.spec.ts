import { TestBed } from '@angular/core/testing';

import { LisPractitionersService } from './lis-practitioners.service';

describe('LisPractitionersService', () => {
  let service: LisPractitionersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LisPractitionersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
