import { TestBed } from '@angular/core/testing';

import { PageentererService } from './pageenterer.service';

describe('PageentererService', () => {
  let service: PageentererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageentererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
