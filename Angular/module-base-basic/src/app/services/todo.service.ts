import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable()
export class TodoService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos';
  private todosSub$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSub$.asObservable();

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl).pipe(
      tap((todos) => {
        this.todosSub$.next(todos.reverse());
      })
    );
  }
}
