import { TestBed, inject } from '@angular/core/testing';

import { TopRatedTvService } from './top-rated-tv.service';

describe('TopRatedTvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopRatedTvService]
    });
  });

  it('should be created', inject([TopRatedTvService], (service: TopRatedTvService) => {
    expect(service).toBeTruthy();
  }));
});
