import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@NgModule({
  declarations: [TodoItemComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [TodoItemComponent],
})
export class SharedModule {}
