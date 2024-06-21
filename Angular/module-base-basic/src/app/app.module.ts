import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TodolistComponent, TodoItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [provideAnimationsAsync(), TodoService],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
