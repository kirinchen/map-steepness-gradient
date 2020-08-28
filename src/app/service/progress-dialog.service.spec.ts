import { TestBed } from '@angular/core/testing';

import { ProgressDialogService } from './progress-dialog.service';

describe('ProgressDialogService', () => {
  let service: ProgressDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
