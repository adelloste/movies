import { TestBed, inject } from '@angular/core/testing';

import { TvRecommendationsResolverService } from './tv-recommendations-resolver.service';

describe('TvRecommendationsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvRecommendationsResolverService]
    });
  });

  it('should be created', inject([TvRecommendationsResolverService], (service: TvRecommendationsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
