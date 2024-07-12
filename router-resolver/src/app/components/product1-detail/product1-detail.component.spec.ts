import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product1DetailComponent } from './product1-detail.component';

describe('Product1DetailComponent', () => {
  let component: Product1DetailComponent;
  let fixture: ComponentFixture<Product1DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product1DetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
