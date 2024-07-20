import { Injectable, inject } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable()
export class TodoService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos';
  private http: HttpClient = inject(HttpClient);

  private todosSub$ = new BehaviorSubject<Todo[]>([]); // store
  todos$ = this.todosSub$.asObservable();

  // function: action
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl).pipe(
      tap((todos) => {
        this.todosSub$.next(todos.reverse()); // reducer
      })
    );
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo).pipe(
      tap((todo: Todo) => {
        const newTodo = new Todo();
        newTodo.foo?.call(todo);

        const newlist: Todo[] = [todo, ...this.todosSub$.value];
        this.todosSub$.next(newlist);
      })
    );
  }
}
