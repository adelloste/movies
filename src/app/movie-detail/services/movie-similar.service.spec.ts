import { TestBed, inject } from '@angular/core/testing';

import { MovieSimilarService } from './movie-similar.service';

describe('MovieSimilarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieSimilarService]
    });
  });

  it('should be created', inject([MovieSimilarService], (service: MovieSimilarService) => {
    expect(service).toBeTruthy();
  }));
});
