import { TestBed, inject } from '@angular/core/testing';

import { PopularTvService } from './popular-tv.service';

describe('PopularTvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopularTvService]
    });
  });

  it('should be created', inject([PopularTvService], (service: PopularTvService) => {
    expect(service).toBeTruthy();
  }));
});
