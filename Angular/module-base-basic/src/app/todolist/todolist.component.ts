import { Component, HostListener, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodoService } from '../services/todo.service';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class TodolistComponent implements OnInit {
  // variable
  container = 'container_test';
  todotitle: string = '';

  // lifecycle
  constructor(public todoService: TodoService) {}
  ngOnInit(): void {
    this.todoService.getTodos();
  }

  // methods
  deleteTodo(id: number) {
    console.log('todolist: ', id);
  }

  onAddTodo(title: string) {
    console.log(title);
  }
}
