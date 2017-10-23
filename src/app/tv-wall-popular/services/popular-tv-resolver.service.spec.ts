import { TestBed, inject } from '@angular/core/testing';

import { PopularTvResolverService } from './popular-tv-resolver.service';

describe('PopularTvResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopularTvResolverService]
    });
  });

  it('should be created', inject([PopularTvResolverService], (service: PopularTvResolverService) => {
    expect(service).toBeTruthy();
  }));
});
