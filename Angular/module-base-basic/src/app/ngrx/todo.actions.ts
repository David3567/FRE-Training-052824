import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

// export const initTodoList = createAction('[Todos] init todolist');

export const addTodo = createAction('[Todos] add Todo', props<Todo>());

export const initTodos = createAction('[Todos] init Todos'); // ----> effect

export const initSuccess = createAction(
  '[Todos] init success',
  props<{ todos: Todo[] }>()
); // <---- effect

export const initFailure = createAction(
  '[Todos] init failure',
  props<{ err: string }>()
); // <---- effect
