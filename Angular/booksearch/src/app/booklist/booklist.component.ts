import { Component, OnInit, inject } from '@angular/core';
import { BookService } from '../services/book.service';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { Card } from '../interfaces/book.interface';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.scss',
})
export class BooklistComponent implements OnInit {
  booklist: Card[] = [];
  // sbp = new Subscription();
  notifier = new Subject();
  // service = inject(BookService);

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.booklist$
      .pipe(takeUntil(this.notifier))
      .subscribe((data: Card[]) => {
        this.booklist = data;
      });
  }
  ngOnDestroy(): void {
    this.stopObs();
  }

  onClick(book: Card) {
    this.bookService.manageWishList(book);
  }

  private stopObs() {
    this.notifier.next(null);
    this.notifier.complete();
  }
}
