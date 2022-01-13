import { TestBed } from '@angular/core/testing';

import { YahooAPIService } from './yahoo-api.service';

describe('YahooAPIService', () => {
  let service: YahooAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YahooAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
