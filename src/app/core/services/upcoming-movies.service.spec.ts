import { TestBed, inject } from '@angular/core/testing';

import { UpcomingMoviesService } from './upcoming-movies.service';

describe('UpcomingMoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpcomingMoviesService]
    });
  });

  it('should be created', inject([UpcomingMoviesService], (service: UpcomingMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
