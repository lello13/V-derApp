import { TestBed } from '@angular/core/testing';

import { StadService } from './stad.service';

describe('StadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StadService = TestBed.get(StadService);
    expect(service).toBeTruthy();
  });
});
