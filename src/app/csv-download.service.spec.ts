import { TestBed, inject } from '@angular/core/testing';

import { CsvDownloadService } from './csv-download.service';

describe('CsvDownloadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CsvDownloadService]
    });
  });

  it('should be created', inject([CsvDownloadService], (service: CsvDownloadService) => {
    expect(service).toBeTruthy();
  }));
});
