import { TestBed } from '@angular/core/testing';

import { ProductListResolver } from './product-list.resolver';

describe('ProductListResolver', () => {
  let resolver: ProductListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
