import { TestBed } from '@angular/core/testing';

import { NytimesService } from './nytimes.service';

describe('NytimesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NytimesService = TestBed.get(NytimesService);
    expect(service).toBeTruthy();
  });
});
