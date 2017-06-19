import { TestBed, inject } from '@angular/core/testing';

import { MovieCreditsService } from './movie-credits.service';

describe('MovieCreditsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieCreditsService]
    });
  });

  it('should be created', inject([MovieCreditsService], (service: MovieCreditsService) => {
    expect(service).toBeTruthy();
  }));
});
