import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductListResolver implements Resolve<boolean> {
  constructor(
    private productService: ProductService,
    private authService: AuthService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    this.authService.loading$.next(true);

    console.log('ProductListResover is called');
    return this.productService.getProducts().pipe(
      tap((_) => {
        this.authService.loading$.next(false);
      })
    );
  }
}
