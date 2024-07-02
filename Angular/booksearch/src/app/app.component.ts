import { Component } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [BookService],
})
export class AppComponent {
  title = 'booksearch';

  obj = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  };

  order() {
    return 0;
  }
}
