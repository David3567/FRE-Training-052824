import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpClientModule } from '@angular/common/http';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { ConvertPipe } from './custompipe/convert.pipe';
import { FormsModule } from '@angular/forms';
import { ShortstringPipe } from './custompipe/shortstring.pipe';
// import { CumstomPipePipe } from './custompipe/cumstom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CustompipeComponent,
    ConvertPipe,
    ShortstringPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
