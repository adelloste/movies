import { TestBed, inject } from '@angular/core/testing';

import { UpcomingResolverService } from './upcoming-resolver.service';

describe('UpcomingResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpcomingResolverService]
    });
  });

  it('should be created', inject([UpcomingResolverService], (service: UpcomingResolverService) => {
    expect(service).toBeTruthy();
  }));
});
