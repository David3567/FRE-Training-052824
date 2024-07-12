import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<boolean> {
  constructor(private router: Router, private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    console.log('ProductResolverService  called');
    const id = route.paramMap.get('id');

    if (!id) return of(null);
    return this.productService.getProduct(id);
  }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  //   const id = route.paramMap.get('id');
  //   console.log('ProductResolverService  called with ' + id);

  //   if (!id) return;

  //   return this.productService.getProduct(id).pipe(
  //     map((data) => {
  //       if (data) {
  //         console.log(data);
  //         return data;
  //       } else {
  //         console.log('redirecting');
  //         this.router.navigate(['/product2']);
  //         return null;
  //       }
  //     })
  //   );
  // }
}
