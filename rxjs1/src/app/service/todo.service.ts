import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }
  // subject$ = new Subject();
  behaviorSubject$ = new BehaviorSubject("0");


  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
