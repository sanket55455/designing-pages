import { TestBed } from '@angular/core/testing';

import { AmountTableService } from './amount-table.service';

describe('AmountTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmountTableService = TestBed.get(AmountTableService);
    expect(service).toBeTruthy();
  });
});
