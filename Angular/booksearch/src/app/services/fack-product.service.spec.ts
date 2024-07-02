import { TestBed } from '@angular/core/testing';

import { FackProductService } from './fack-product.service';

describe('FackProductService', () => {
  let service: FackProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FackProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
