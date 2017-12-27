import { TestBed, inject } from '@angular/core/testing';

import { NowPlayingMoviesService } from './now-playing-movies.service';

describe('NowPlayingMoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NowPlayingMoviesService]
    });
  });

  it('should be created', inject([NowPlayingMoviesService], (service: NowPlayingMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
