import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, TodolistComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [provideAnimationsAsync()],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
