import { Component, HostListener, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodoService } from '../services/todo.service';
import { Observable, interval, take } from 'rxjs';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class TodolistComponent implements OnInit {
  // variable
  container = 'container_test';
  todotitle = '';
  todos$ = this.todoService.todos$;

  // lifecycle
  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe();
  }

  // methods
  deleteTodo(id: number) {
    console.log('todolist: ', id);
  }

  onAddTodo(title: string) {
    console.log(title);
  }
}
