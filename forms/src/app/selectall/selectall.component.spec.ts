import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectallComponent } from './selectall.component';

describe('SelectallComponent', () => {
  let component: SelectallComponent;
  let fixture: ComponentFixture<SelectallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
