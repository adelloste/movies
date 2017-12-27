import { TestBed, inject } from '@angular/core/testing';

import { TopRatedMoviesService } from './top-rated-movies.service';

describe('TopRatedMoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopRatedMoviesService]
    });
  });

  it('should be created', inject([TopRatedMoviesService], (service: TopRatedMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
