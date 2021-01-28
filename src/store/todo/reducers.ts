import { title } from "process";
import { TodoState, TodoActionTypes, ADD_TODO, DELETE_TODO } from "./types";


const initialState: TodoState ={title:null};


export function todoReducer(
    state=initialState,
    action:TodoActionTypes
):TodoState{
    switch (action.type) {
        case ADD_TODO:
            return {
              ...state,title};
    
        case DELETE_TODO:
          return { info: null };
    
        default:
          return state;
      }
}
