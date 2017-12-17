import { TestBed, inject } from '@angular/core/testing';

import { MovieSimilarResolverService } from './movie-similar-resolver.service';

describe('MovieSimilarResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieSimilarResolverService]
    });
  });

  it('should be created', inject([MovieSimilarResolverService], (service: MovieSimilarResolverService) => {
    expect(service).toBeTruthy();
  }));
});
