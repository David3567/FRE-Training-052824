import { TestBed } from '@angular/core/testing';

import { NewResolver } from './new.resolver';

describe('NewResolver', () => {
  let resolver: NewResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NewResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
