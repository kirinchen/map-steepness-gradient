import { TestBed } from '@angular/core/testing';

import { UrlParamsService } from './url-params.service';

describe('UrlParamsService', () => {
  let service: UrlParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
