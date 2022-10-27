import { TestBed } from '@angular/core/testing';

import { NgxMatEasyService } from './ngx-mat-easy.service';

describe('NgxMatEasyService', () => {
  let service: NgxMatEasyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatEasyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
