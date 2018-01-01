import { TestBed, inject } from '@angular/core/testing';

import { MovieVideosResolverService } from './movie-videos-resolver.service';

describe('MovieVideosResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieVideosResolverService]
    });
  });

  it('should be created', inject([MovieVideosResolverService], (service: MovieVideosResolverService) => {
    expect(service).toBeTruthy();
  }));
});
