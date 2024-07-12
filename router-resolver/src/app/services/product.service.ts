import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../model/Product.class';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'Memory Card', 500),
    new Product(2, 'Pen Drive', 750),
    new Product(3, 'Power Bank', 100),
    new Product(4, 'Computer', 100),
    new Product(5, 'Laptop', 100),
    new Product(6, 'Printer', 100),
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products).pipe(delay(1500));
  }

  getProduct(id: string): Observable<Product | null> {
    const product = this.products.find((i) => +i.productID === +id);
    if (product) return of(product).pipe(delay(3000));

    return of(null);
  }
}
