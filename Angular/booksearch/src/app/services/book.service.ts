import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  map,
  of,
  tap,
} from 'rxjs';
import { Book, Card, ResData } from '../interfaces/book.interface';
import { APIURL } from '../app.module';

@Injectable()
export class BookService {
  // private readonly apiURL =
  private books$ = new Subject<Card[]>();
  booklist$ = this.books$.asObservable();

  private wishes$ = new BehaviorSubject<Card[]>([]);
  wishlist$ = this.wishes$.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(APIURL) private apiURL: string
  ) {}
  // private http = inject(HttpClient);

  searchBooks(bookName: string): Observable<Card[]> {
    return this.http.get<ResData>(`${this.apiURL}${bookName}`).pipe(
      map(({ items }: ResData): Card[] =>
        items.map(({ volumeInfo }: Book) => ({
          imageLinks: volumeInfo.imageLinks?.thumbnail || '',
          name: volumeInfo.title,
          publisher: volumeInfo.publisher,
          publishedDate: volumeInfo.publishedDate,
          description: volumeInfo.description,
        }))
      ),
      tap((cards: Card[]) => {
        this.books$.next(cards);
      })
    );
  }

  manageWishList(book: Card) {
    const arr = [...this.wishes$.value, book];
    this.wishes$.next(arr);
  }

  // private filterBooks(books: any[]): any[] {
  //   return books.filter(
  //     (book) =>
  //       book.volumeInfo.imageLinks &&
  //       book.volumeInfo.title &&
  //       book.volumeInfo.publisher &&
  //       book.volumeInfo.publishedDate &&
  //       book.volumeInfo.description
  //   );
  // }
}
