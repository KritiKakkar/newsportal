import { TestBed } from '@angular/core/testing';

import { NewspostService } from './newspost.service';

describe('NewspostService', () => {
  let service: NewspostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewspostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
