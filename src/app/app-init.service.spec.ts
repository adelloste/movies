import { TestBed, inject } from '@angular/core/testing';

import { AppInitService } from './app-init.service';

describe('AppInitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppInitService]
    });
  });

  it('should be created', inject([AppInitService], (service: AppInitService) => {
    expect(service).toBeTruthy();
  }));
});
