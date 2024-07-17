import { NgModule, isDevMode } from '@angular/core';
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
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './ngrx/todo.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './ngrx/todo.effects';

@NgModule({
  declarations: [AppComponent, TodolistComponent, TodoItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: todosReducer }),
    StoreDevtoolsModule.instrument({
      name: 'Todo Demo',
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [provideAnimationsAsync(), TodoService],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/* 
store = {
  todos: {
    todolist: [],
    err: ''
  },
  products: {
    productlist: []
  },
  auth: {
  }
}
*/
