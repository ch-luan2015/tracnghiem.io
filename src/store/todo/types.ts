import {Todo} from "resources/todo";

export type TodoState = {
    info: Todo | null;
  };
  export const ADD_TODO = "ADD_TODO";
  export const DELETE_TODO = "DELETE_TODO";

  interface AddTodo {
    type: typeof ADD_TODO;
    payload: Todo;  
  }
  
  interface DeleteTodo {
    type: typeof DELETE_TODO;
  }

  export type TodoActionTypes = AddTodo | DeleteTodo;
