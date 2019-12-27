import { TestBed } from '@angular/core/testing';

import { CreateQuotationService } from './create-quotation.service';

describe('CreateQuotationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateQuotationService = TestBed.get(CreateQuotationService);
    expect(service).toBeTruthy();
  });
});
