import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit, OnDestroy {
  searchInput = new FormControl('');
  sbp = new Subscription();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.sbp = this.searchInput.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((bookname: string | null) => {
          if (bookname && bookname.trim() !== '')
            return this.bookService.searchBooks(bookname);
          else return of();
        })
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }
}
