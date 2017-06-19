import { TestBed, inject } from '@angular/core/testing';

import { MovieResolverService } from './movie-resolver.service';

describe('MovieResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieResolverService]
    });
  });

  it('should be created', inject([MovieResolverService], (service: MovieResolverService) => {
    expect(service).toBeTruthy();
  }));
});
