import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product.class';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.scss'],
})
export class Product2Component {
  public products!: Product[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    console.log('product2 init');
    this.products = this.activatedRoute.snapshot.data['products']; // 'products vs product'
  }
}
