import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { Todo, TodoState } from '../interfaces/todo.interface';

const initTodoState: TodoState = {
  todolist: [
    // {
    //   userId: 1,
    //   id: 1,
    //   title: 'delectus aut autem',
    //   completed: false,
    // },
    // {
    //   userId: 1,
    //   id: 2,
    //   title: 'quis ut nam facilis et officia qui',
    //   completed: false,
    // },
    // {
    //   userId: 1,
    //   id: 3,
    //   title: 'fugiat veniam minus',
    //   completed: false,
    // },
    // {
    //   userId: 1,
    //   id: 4,
    //   title: 'et porro tempora',
    //   completed: true,
    // },
  ],
  err: '',
};

export const todosReducer = createReducer(
  initTodoState,
  on(TodoActions.addTodo, (state, todo) => {
    return {
      ...state,
      todolist: [todo, ...state.todolist],
    };
  }),

  on(TodoActions.initSuccess, (state, { todos }) => {
    return {
      ...state,
      todolist: [...todos],
    };
  }),
  on(TodoActions.initFailure, (state, { err }) => {
    return {
      ...state,
      todolist: [],
      err,
    };
  })
);
