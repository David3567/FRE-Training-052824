import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Observable } from 'rxjs';
import { Card } from '../interfaces/book.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent {
  wishlist$!: Observable<Card[]>;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.wishlist$ = this.bookService.wishlist$;
  }
}
