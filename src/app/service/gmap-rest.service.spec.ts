import { TestBed } from '@angular/core/testing';

import { GMapRestService } from './gmap-rest.service';

describe('GMapRestService', () => {
  let service: GMapRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GMapRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
