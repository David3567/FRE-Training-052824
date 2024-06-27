import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Observable, Subscription } from 'rxjs';
import { Card } from '../interfaces/book.interface';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.scss',
})
export class BooklistComponent implements OnInit {
  booklist: Card[] = [];
  sbp = new Subscription();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.sbp = this.bookService.booklist$.subscribe((data: Card[]) => {
      this.booklist = data;
    });
  }
  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }

  onClick(book: Card) {
    this.bookService.manageWishList(book);
  }
}
