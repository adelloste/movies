import { TestBed, inject } from '@angular/core/testing';

import { PopularMoviesService } from './popular-movies.service';

describe('PopularMoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopularMoviesService]
    });
  });

  it('should be created', inject([PopularMoviesService], (service: PopularMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
