import { TestBed, inject } from '@angular/core/testing';

import { IndexPaginationService } from './index-pagination.service';

describe('IndexPaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexPaginationService]
    });
  });

  it('should be created', inject([IndexPaginationService], (service: IndexPaginationService) => {
    expect(service).toBeTruthy();
  }));
});
