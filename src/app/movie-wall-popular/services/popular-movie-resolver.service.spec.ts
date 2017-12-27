import { TestBed, inject } from '@angular/core/testing';

import { PopularMovieResolverService } from './popular-movie-resolver.service';

describe('PopularMovieResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopularMovieResolverService]
    });
  });

  it('should be created', inject([PopularMovieResolverService], (service: PopularMovieResolverService) => {
    expect(service).toBeTruthy();
  }));
});
