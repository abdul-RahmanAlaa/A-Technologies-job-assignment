import { TestBed } from '@angular/core/testing';

import { FixedDataService } from './fixed-data.service';

describe('FixedDataService', () => {
  let service: FixedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
