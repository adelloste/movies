import { TestBed, inject } from '@angular/core/testing';

import { TvRecommendationsService } from './tv-recommendations.service';

describe('TvRecommendationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvRecommendationsService]
    });
  });

  it('should be created', inject([TvRecommendationsService], (service: TvRecommendationsService) => {
    expect(service).toBeTruthy();
  }));
});
