import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforComponent } from './ngfor.component';

describe('NgforComponent', () => {
  let component: NgforComponent;
  let fixture: ComponentFixture<NgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
