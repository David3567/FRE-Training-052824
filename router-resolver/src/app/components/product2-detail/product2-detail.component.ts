import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product.class';

@Component({
  selector: 'app-product2-detail',
  templateUrl: './product2-detail.component.html',
  styleUrls: ['./product2-detail.component.scss'],
})
export class Product2DetailComponent {
  product!: Product;
  constructor(private _Activatedroute: ActivatedRoute) {
    this.product = this._Activatedroute.snapshot.data['product'];
  }
}
