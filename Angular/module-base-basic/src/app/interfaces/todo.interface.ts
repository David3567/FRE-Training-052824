export class Todo {
  userId!: number;
  id!: number;
  title!: string;
  completed!: boolean;

  foo?() {
    console.log(this.id);
  }
}

export interface TodoState {
  todolist: Todo[];
  err: string;
}
