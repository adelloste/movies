import { TestBed, inject } from '@angular/core/testing';

import { TvCreditsResolverService } from './tv-credits-resolver.service';

describe('TvCreditsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvCreditsResolverService]
    });
  });

  it('should be created', inject([TvCreditsResolverService], (service: TvCreditsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
