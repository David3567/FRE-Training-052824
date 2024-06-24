import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfortrackbyComponent } from './ngfortrackby.component';

describe('NgfortrackbyComponent', () => {
  let component: NgfortrackbyComponent;
  let fixture: ComponentFixture<NgfortrackbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgfortrackbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgfortrackbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
