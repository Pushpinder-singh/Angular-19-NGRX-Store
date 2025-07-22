import { createAction, props } from '@ngrx/store';
import { Todo } from '../../Models/todo.model';



//export const action = createAction('[Source] Event', properties from selectors));



export const addTodo  = createAction('[Todos] Add todo' , props<{todo:Todo}>());
export const removeTodo  = createAction('[Todos] Remove todo' , props<{id:string}>());
export const toggleTodo  = createAction('[Todos] Toggle todo' , props<{id:string}>());