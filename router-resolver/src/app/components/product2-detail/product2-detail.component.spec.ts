import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product2DetailComponent } from './product2-detail.component';

describe('Product2DetailComponent', () => {
  let component: Product2DetailComponent;
  let fixture: ComponentFixture<Product2DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product2DetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product2DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
