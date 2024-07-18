import { TodoService } from 'src/app/services/todo.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoListComponent } from './todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  const name = 'inputbox';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [TodoService],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should update ${name} when input value changes`, () => {
    const inputText = 'Hello World';
    const expInput = inputText;

    component.inputbox.setValue(inputText);

    expect(component.inputbox.value).toEqual(expInput);
  });
});
