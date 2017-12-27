import { TestBed, inject } from '@angular/core/testing';

import { NowPlayingResolverService } from './now-playing-resolver.service';

describe('NowPlayingResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NowPlayingResolverService]
    });
  });

  it('should be created', inject([NowPlayingResolverService], (service: NowPlayingResolverService) => {
    expect(service).toBeTruthy();
  }));
});
