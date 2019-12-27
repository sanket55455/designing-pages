import { TestBed } from '@angular/core/testing';

import { CreatProspectDetailsService } from './creat-prospect-details.service';

describe('CreatProspectDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatProspectDetailsService = TestBed.get(CreatProspectDetailsService);
    expect(service).toBeTruthy();
  });
});
