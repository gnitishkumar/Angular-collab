import { TestBed } from '@angular/core/testing';

import { ScrolltopService } from './scrolltop.service';

describe('ScrolltopService', () => {
  let service: ScrolltopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrolltopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
