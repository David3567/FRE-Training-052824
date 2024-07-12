import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Product } from 'src/app/model/Product.class';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss'],
})
export class Product1Component implements OnInit {
  products: Product[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    // this.router.events.subscribe((event) => console.log(event));
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      if (data && data.length) {
        this.products = data.reverse();
      }
    });
  }
}
