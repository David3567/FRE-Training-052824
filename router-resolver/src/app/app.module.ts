import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { Product1Component } from './components/product1/product1.component';
import { Product2Component } from './components/product2/product2.component';
import { Product2DetailComponent } from './components/product2-detail/product2-detail.component';
import { Product1DetailComponent } from './components/product1-detail/product1-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    Product1Component,
    Product2Component,
    Product2DetailComponent,
    Product1DetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
