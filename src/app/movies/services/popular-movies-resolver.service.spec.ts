import { TestBed, inject } from '@angular/core/testing';

import { PopularMoviesResolverService } from './popular-movies-resolver.service';

describe('PopularMoviesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopularMoviesResolverService]
    });
  });

  it('should be created', inject([PopularMoviesResolverService], (service: PopularMoviesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
