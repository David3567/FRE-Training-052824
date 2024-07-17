import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../interfaces/todo.interface';

export const todoState = createFeatureSelector<TodoState>('todos');

export const getTodolist = createSelector(todoState, (state) => state.todolist);
