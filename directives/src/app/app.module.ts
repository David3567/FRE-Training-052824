import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { AttributeComponent } from './attribute/attribute.component';
import { NgifComponent } from './ngif/ngif.component';
import { FormsModule } from '@angular/forms';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgfortrackbyComponent } from './ngfortrackby/ngfortrackby.component';
import { CustomdirectiveComponent } from './customdirective/customdirective.component';
import { ColorDirective } from './customdirective/color.directive';
import { NewcolorDirective } from './customdirective/newcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgforComponent,
    AttributeComponent,
    NgifComponent,
    NgswitchComponent,
    NgfortrackbyComponent,
    CustomdirectiveComponent,
    ColorDirective,
    NewcolorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
