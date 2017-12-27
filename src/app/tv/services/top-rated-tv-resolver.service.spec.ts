import { TestBed, inject } from '@angular/core/testing';

import { TopRatedTvResolverService } from './top-rated-tv-resolver.service';

describe('TopRatedTvResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopRatedTvResolverService]
    });
  });

  it('should be created', inject([TopRatedTvResolverService], (service: TopRatedTvResolverService) => {
    expect(service).toBeTruthy();
  }));
});
