import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/index';
import {Usuario} from '../../modelos/usuario.model'


export interface UsuariosState {
    users:Usuario[],
    loaded:boolean,
    loading:boolean,
    error:any
}

export const usuariosInitialState: UsuariosState = {
    users:[],
    loaded:false,
    loading:false,
    error:null
}

const _usuariosReducer = createReducer(usuariosInitialState,

    on(actions.cargarUsuarios, state => ({ ...state, loading: true})),
    
    on(actions.cargarUsuariosSuccess, (state ,{usuarios})=>({
        ...state,
        loading:false,
        loaded:true, 
       users: [...usuarios],
       
    }) ),
    on(actions.cargarUsuariosError, (state ,{payload})=>({
        ...state,
        loading:false,
        loaded:false,
       error:{                    //payload
            url:payload.url,
            name:payload.name,
            status:payload.status,
            mensaje:payload.message,
            payload:payload
       }     
       
    }) ),

);

export function usuariosReducer(state: UsuariosState | undefined, action: Action) {
    return _usuariosReducer(state, action);
}