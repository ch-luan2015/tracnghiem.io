import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from "./localStorage";

import { userReducer } from './user/reducers';
import { todoReducer } from './todo/reducers';


export const rootReducer = combineReducers({ 
    user:userReducer,
    todo:todoReducer,
 });

 export type AppState = ReturnType<typeof rootReducer>;

 export default function configureStore() {
   const middlewares = [thunkMiddleware];
   const middleWareEnhancer = applyMiddleware(...middlewares);
   const persistedState = loadState();
   const store = createStore(
     rootReducer,
     persistedState,
     composeWithDevTools(middleWareEnhancer)
   );
 
   store.subscribe(() => {
     saveState({
       user: store.getState().user,
     });
   });
 
   return store;
 }
 
 export const store = configureStore();
