import { TestBed, inject } from '@angular/core/testing';

import { AiringTodayTvService } from './airing-today-tv.service';

describe('AiringTodayTvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AiringTodayTvService]
    });
  });

  it('should be created', inject([AiringTodayTvService], (service: AiringTodayTvService) => {
    expect(service).toBeTruthy();
  }));
});
