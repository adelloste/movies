import { TestBed, inject } from '@angular/core/testing';

import { TvSimilarService } from './tv-similar.service';

describe('TvSimilarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvSimilarService]
    });
  });

  it('should be created', inject([TvSimilarService], (service: TvSimilarService) => {
    expect(service).toBeTruthy();
  }));
});
