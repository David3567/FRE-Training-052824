import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { exhaustMap, catchError, map } from 'rxjs/operators';
import * as TodoActions from './todo.actions';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces/todo.interface';

@Injectable()
export class TodoEffects {
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos';
  private http: HttpClient = inject(HttpClient);

  initTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.initTodos),
      exhaustMap(() => this.http.get<Todo[]>(this.baseUrl)),
      map((todos: Todo[]) => TodoActions.initSuccess({ todos })),
      catchError((err) => {
        return of(TodoActions.initFailure({ err: JSON.stringify(err) }));
      })
    )
  );

  constructor(private actions$: Actions) {}
}
