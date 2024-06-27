import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistComponent } from './booklist.component';

describe('BooklistComponent', () => {
  let component: BooklistComponent;
  let fixture: ComponentFixture<BooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooklistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
