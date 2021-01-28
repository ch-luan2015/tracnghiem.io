import {ADD_TODO, DELETE_TODO} from './types'
import {Todo} from 'resources/todo'



export function addTodo(todo: Todo) {
    return {
      type: ADD_TODO,
      payload: todo,
    };
  }
  
  export function deleteTodo() {
    return {
      type: DELETE_TODO
    };
  }
  