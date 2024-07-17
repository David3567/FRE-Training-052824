import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Todo } from '../interfaces/todo.interface';
import { TodoService } from '../services/todo.service';
import { Store } from '@ngrx/store';
import * as TodoSelectors from '../ngrx/todo.selectors';
import * as TodoActions from '../ngrx/todo.actions';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class TodolistComponent implements OnInit, OnDestroy {
  // variable
  // todos$: Observable<Todo[]> = this.todoService.todos$; // selector
  todos$ = this.store.select(TodoSelectors.getTodolist);
  private notifier = new Subject();

  // lifecycle
  constructor(
    // private readonly todoService: TodoService
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(TodoActions.initTodos());
    // this.todoService.getTodos().pipe(takeUntil(this.notifier)).subscribe();
  }
  ngOnDestroy(): void {
    this.stopObs();
  }

  // methods
  deleteTodo(id: number) {
    console.log('todolist: ', id);
  }

  onAddTodo(title: string) {
    const newUser: Todo = {
      title,
      userId: 44,
      completed: false,
      id: Math.floor(Math.random() * 100000),
    };

    this.store.dispatch(TodoActions.addTodo(newUser));

    // this.todoService
    //   .addTodo({
    //     title,
    //     userId: 44,
    //     completed: false,
    //     id: 0,
    //   })
    //   .pipe(takeUntil(this.notifier))
    //   .subscribe();
  }

  private stopObs() {
    this.notifier.next(null);
    this.notifier.complete();
  }
}
