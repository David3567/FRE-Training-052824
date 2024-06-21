import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable()
export class TodoService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos';
  todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl).pipe(
      tap((todos) => {
        this.todos$.next(todos);
      })
    );
    // return fetch(this.baseUrl).then((response) => response.json()); // axios
  }
}
