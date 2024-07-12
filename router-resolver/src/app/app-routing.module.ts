import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { Product1DetailComponent } from './components/product1-detail/product1-detail.component';
import { Product1Component } from './components/product1/product1.component';
import { Product2DetailComponent } from './components/product2-detail/product2-detail.component';
import { Product2Component } from './components/product2/product2.component';
import { ProductListResolver } from './services/product-list.resolver';
import { ProductGuard } from './services/product.guard';

import { ProductResolver } from './services/product.resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'product1',
    component: Product1Component,
    canActivate: [ProductGuard],
  },
  {
    path: 'product2',
    component: Product2Component,
    resolve: { products: ProductListResolver },
  },
  { path: 'product1/:id', component: Product1DetailComponent },
  {
    path: 'product2/:id',
    component: Product2DetailComponent,
    resolve: { product: ProductResolver },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      // { enableTracing: true }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
