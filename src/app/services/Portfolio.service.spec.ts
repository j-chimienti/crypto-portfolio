import { TestBed, inject } from '@angular/core/testing';

import { PortfolioService } from './Portfolio.service';

describe('PortfolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioService]
    });
  });

  it('should be created', inject([PortfolioService], (service: PortfolioService) => {
    expect(service).toBeTruthy();
  }));
});
