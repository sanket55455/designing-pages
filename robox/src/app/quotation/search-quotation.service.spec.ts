import { TestBed } from '@angular/core/testing';

import { SearchQuotationService } from './search-quotation.service';

describe('SearchQuotationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchQuotationService = TestBed.get(SearchQuotationService);
    expect(service).toBeTruthy();
  });
});
