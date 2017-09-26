import { TestBed, inject } from '@angular/core/testing';

import { GastoRepositoryService } from './gasto-repository.service';

describe('GastoRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GastoRepositoryService]
    });
  });

  it('should be created', inject([GastoRepositoryService], (service: GastoRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
