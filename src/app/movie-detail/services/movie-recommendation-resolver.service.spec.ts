import { TestBed, inject } from '@angular/core/testing';

import { MovieRecommendationResolverService } from './movie-recommendation-resolver.service';

describe('MovieRecommendationResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieRecommendationResolverService]
    });
  });

  it('should be created', inject([MovieRecommendationResolverService], (service: MovieRecommendationResolverService) => {
    expect(service).toBeTruthy();
  }));
});
