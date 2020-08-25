import { TestBed } from '@angular/core/testing';

import { ConfigGaurdService } from './config-gaurd.service';

describe('ConfigGaurdService', () => {
  let service: ConfigGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
