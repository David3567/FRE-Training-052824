import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { Todo } from 'src/app/interfaces/user.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  todolist$!: Observable<Todo[]>;
  // inputbox = new FormControl();
  sbp!: Subscription;
  form!: FormGroup;

  get inputbox(): FormControl {
    return this.form.get('inputbox') as FormControl;
  }

  // group of your lifecycle
  constructor(private todoService: TodoService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      inputbox: [],
    });

    this.todolist$ = this.todoService.getTodo();
    this.sbp = this.inputbox.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }
  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }

  deleteTodo(id: number) {
    console.log('from todolist: ', id);
  }
}
