import { TestBed, inject } from '@angular/core/testing';

import { TvCreditsService } from './tv-credits.service';

describe('TvCreditsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvCreditsService]
    });
  });

  it('should be created', inject([TvCreditsService], (service: TvCreditsService) => {
    expect(service).toBeTruthy();
  }));
});
