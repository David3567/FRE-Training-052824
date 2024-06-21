import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private todoService: TodoService) {
    this.todoService.todos$.subscribe((res) => {
      console.log('from appcomponent: ', res);
    });
  }
}
