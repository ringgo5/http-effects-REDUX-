import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducer/index';


export interface AppState {
   usuarios: reducers.UsuariosState
   usuario:reducers.UsuarioState
}



export const appReducers: ActionReducerMap<AppState> = {
   usuarios:reducers.usuariosReducer,
   usuario:reducers.usuarioReducer
}