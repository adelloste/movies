import { TestBed, inject } from '@angular/core/testing';

import { OnTheAirTvService } from './on-the-air-tv.service';

describe('OnTheAirTvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnTheAirTvService]
    });
  });

  it('should be created', inject([OnTheAirTvService], (service: OnTheAirTvService) => {
    expect(service).toBeTruthy();
  }));
});
