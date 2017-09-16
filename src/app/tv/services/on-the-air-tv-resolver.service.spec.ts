import { TestBed, inject } from '@angular/core/testing';

import { OnTheAirTvResolverService } from './on-the-air-tv-resolver.service';

describe('OnTheAirTvResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnTheAirTvResolverService]
    });
  });

  it('should be created', inject([OnTheAirTvResolverService], (service: OnTheAirTvResolverService) => {
    expect(service).toBeTruthy();
  }));
});
