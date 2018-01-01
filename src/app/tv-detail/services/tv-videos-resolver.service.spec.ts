import { TestBed, inject } from '@angular/core/testing';

import { TvVideosResolverService } from './tv-videos-resolver.service';

describe('TvVideosResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvVideosResolverService]
    });
  });

  it('should be created', inject([TvVideosResolverService], (service: TvVideosResolverService) => {
    expect(service).toBeTruthy();
  }));
});
