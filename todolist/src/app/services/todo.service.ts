import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/user.interface';
import { BehaviorSubject, Subject, debounceTime } from 'rxjs';

@Injectable()
export class TodoService {
  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodo() {
    return this.http.get<Todo[]>(this.url);
  }
}
