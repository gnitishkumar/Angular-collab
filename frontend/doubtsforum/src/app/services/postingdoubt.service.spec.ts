import { TestBed } from '@angular/core/testing';

import { PostingdoubtService } from './postingdoubt.service';

describe('PostingdoubtService', () => {
  let service: PostingdoubtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostingdoubtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
