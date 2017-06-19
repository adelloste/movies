import { TestBed, inject } from '@angular/core/testing';

import { MovieCreditsResolverService } from './movie-credits-resolver.service';

describe('MovieCreditsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieCreditsResolverService]
    });
  });

  it('should be created', inject([MovieCreditsResolverService], (service: MovieCreditsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
