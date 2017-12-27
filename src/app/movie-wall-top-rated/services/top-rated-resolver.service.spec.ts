import { TestBed, inject } from '@angular/core/testing';

import { TopRatedResolverService } from './top-rated-resolver.service';

describe('TopRatedResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopRatedResolverService]
    });
  });

  it('should be created', inject([TopRatedResolverService], (service: TopRatedResolverService) => {
    expect(service).toBeTruthy();
  }));
});
