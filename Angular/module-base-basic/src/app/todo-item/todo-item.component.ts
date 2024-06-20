import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input('item') todo!: Todo; // {name: myname} = {name: 'hello'}
  @Input() hello!: string;
  @Output() deleteItem = new EventEmitter();

  deleteTodo() {
    this.deleteItem.emit(this.todo.id);
  }
}
