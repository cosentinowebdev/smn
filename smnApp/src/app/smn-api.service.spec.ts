import { TestBed } from '@angular/core/testing';

import { SmnApiService } from './smn-api.service';

describe('SmnApiService', () => {
  let service: SmnApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmnApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
