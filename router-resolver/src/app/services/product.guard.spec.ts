import { TestBed } from '@angular/core/testing';

import { ProductGuard } from './product.guard';

describe('ProductGuard', () => {
  let guard: ProductGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
