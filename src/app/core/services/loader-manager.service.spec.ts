import { TestBed, inject } from '@angular/core/testing';

import { LoaderManagerService } from './loader-manager.service';

describe('LoaderManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderManagerService]
    });
  });

  it('should be created', inject([LoaderManagerService], (service: LoaderManagerService) => {
    expect(service).toBeTruthy();
  }));
});
