import { TestBed } from '@angular/core/testing';

import { CurPathsService } from './cur-paths.service';

describe('CurPathsService', () => {
  let service: CurPathsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurPathsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
