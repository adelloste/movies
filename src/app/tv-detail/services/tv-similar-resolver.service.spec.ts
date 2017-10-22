import { TestBed, inject } from '@angular/core/testing';

import { TvSimilarResolverService } from './tv-similar-resolver.service';

describe('TvSimilarResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvSimilarResolverService]
    });
  });

  it('should be created', inject([TvSimilarResolverService], (service: TvSimilarResolverService) => {
    expect(service).toBeTruthy();
  }));
});
