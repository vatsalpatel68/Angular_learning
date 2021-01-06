import { TestBed } from '@angular/core/testing';

import { UserdateService } from './userdate.service';

describe('UserdateService', () => {
  let service: UserdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
