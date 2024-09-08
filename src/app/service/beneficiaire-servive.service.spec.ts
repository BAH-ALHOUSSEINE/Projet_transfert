import { TestBed } from '@angular/core/testing';

import { BeneficiaireServiveService } from './beneficiaire-servive.service';

describe('BeneficiaireServiveService', () => {
  let service: BeneficiaireServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeneficiaireServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
