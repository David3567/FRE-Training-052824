import { TodoService } from 'src/app/services/todo.service';
import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subject,
  interval,
  of,
  subscribeOn,
  throwError,
} from 'rxjs';
import {
  map,
  filter,
  take,
  debounceTime,
  tap,
  catchError,
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // template: ` <div>hello world</div> `,
  // styles: [],
})
export class AppComponent implements OnInit {
  title = 'todolist';
  subject$ = new Subject();
  counter = 0;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}
}
