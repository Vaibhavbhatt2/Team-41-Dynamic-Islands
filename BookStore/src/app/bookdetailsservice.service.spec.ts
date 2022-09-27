import { TestBed } from '@angular/core/testing';

import { BookdetailsserviceService } from './bookdetailsservice.service';

describe('BookdetailsserviceService', () => {
  let service: BookdetailsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookdetailsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
