import { TestBed, inject } from '@angular/core/testing';

import { MovieRecommendationService } from './movie-recommendation.service';

describe('MovieRecommendationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieRecommendationService]
    });
  });

  it('should be created', inject([MovieRecommendationService], (service: MovieRecommendationService) => {
    expect(service).toBeTruthy();
  }));
});
