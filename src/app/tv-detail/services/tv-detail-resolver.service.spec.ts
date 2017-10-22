import { TestBed, inject } from '@angular/core/testing';

import { TvDetailResolverService } from './tv-detail-resolver.service';

describe('TvDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvDetailResolverService]
    });
  });

  it('should be created', inject([TvDetailResolverService], (service: TvDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
