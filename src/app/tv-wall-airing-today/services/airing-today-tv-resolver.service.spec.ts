import { TestBed, inject } from '@angular/core/testing';

import { AiringTodayTvResolverService } from './airing-today-tv-resolver.service';

describe('AiringTodayTvResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AiringTodayTvResolverService]
    });
  });

  it('should be created', inject([AiringTodayTvResolverService], (service: AiringTodayTvResolverService) => {
    expect(service).toBeTruthy();
  }));
});
