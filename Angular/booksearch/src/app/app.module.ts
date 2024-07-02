import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { BooklistComponent } from './booklist/booklist.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookService } from './services/book.service';

export const APIURL = new InjectionToken<string>('');

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BooklistComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    // BookService
    { provide: BookService, useClass: BookService },
    {
      provide: APIURL,
      useValue: 'https://www.googleapis.com/books/v1/volumes?q=',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
