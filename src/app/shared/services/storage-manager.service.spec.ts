import { TestBed, inject } from '@angular/core/testing';

import { StorageManagerService } from './storage-manager.service';

describe('StorageManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageManagerService]
    });
  });

  it('should be created', inject([StorageManagerService], (service: StorageManagerService) => {
    expect(service).toBeTruthy();
  }));
});
