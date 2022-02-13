import { TestBed } from '@angular/core/testing';

import { BupaService } from './bupa.service';

describe('BupaService', () => {
  let service: BupaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BupaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
