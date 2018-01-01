import { TestBed, inject } from '@angular/core/testing';

import { MovieVideosService } from './movie-videos.service';

describe('MovieVideosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieVideosService]
    });
  });

  it('should be created', inject([MovieVideosService], (service: MovieVideosService) => {
    expect(service).toBeTruthy();
  }));
});
