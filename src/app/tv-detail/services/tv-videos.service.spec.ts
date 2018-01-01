import { TestBed, inject } from '@angular/core/testing';

import { TvVideosService } from './tv-videos.service';

describe('TvVideosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvVideosService]
    });
  });

  it('should be created', inject([TvVideosService], (service: TvVideosService) => {
    expect(service).toBeTruthy();
  }));
});
