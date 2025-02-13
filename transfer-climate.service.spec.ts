import { TestBed } from '@angular/core/testing';

import { TransferClimateService } from './transfer-climate.service';

describe('TransferClimateService', () => {
  let service: TransferClimateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferClimateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
