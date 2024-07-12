import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product.class';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product1-detail',
  templateUrl: './product1-detail.component.html',
  styleUrls: ['./product1-detail.component.scss'],
})
export class Product1DetailComponent {
  product!: Product | null;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {
    let id = this._Activatedroute.snapshot.params['id'];
    console.log(id);
    this._productService.getProduct(id).subscribe((data) => {
      this.product = data;
      console.log(this.product);
    });
  }
}
