import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Todo } from '../interfaces/todo.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class TodolistComponent implements OnInit, OnDestroy {
  // variable
  todos$: Observable<Todo[]> = this.todoService.todos$;
  private notifier = new Subject();

  // lifecycle
  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().pipe(takeUntil(this.notifier)).subscribe();
  }
  ngOnDestroy(): void {
    this.stopObs();
  }

  // methods
  deleteTodo(id: number) {
    console.log('todolist: ', id);
  }

  onAddTodo(title: string) {
    this.todoService
      .addTodo({
        title,
        userId: 44,
        completed: false,
        id: 0,
      })
      .pipe(takeUntil(this.notifier))
      .subscribe();
  }

  private stopObs() {
    this.notifier.next(null);
    this.notifier.complete();
  }
}
