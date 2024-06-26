import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodoService } from './service/todo.service';
import { Observable, from, fromEvent, map, of, pipe, take, tap } from 'rxjs';
import { lookup } from 'dns';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: any[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {

    // new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('Hello from the promise!');
    //   }, 2000);
    // });

    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
    });
  }
}
