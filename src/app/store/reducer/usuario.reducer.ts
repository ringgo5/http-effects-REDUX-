import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/usuario.actions';
import { Usuario } from 'src/app/modelos/usuario.model';

export interface UsuarioState {
    user: any,
    loaded:boolean,
    loading:boolean,
    error:any,
    id:string
}

export const initialState: UsuarioState = {
   
   loaded:false,
   loading:false,
   error:null,
   id:"",
   user:Usuario
   

}

const _usuarioReducer = createReducer(initialState,

    on(actions.cargarUsuario, (state,{id}) => ({
         ...state,
         loading:true,
         id:id,

        })),
    on(actions.cargarUsuarioSuccess, (state ,{usuario})=> ({ 
        ...state,
        loaded:true,
        user:{...usuario}

    })),
   
    on(actions.cargarUsuarioError, (state ,{payload})=>({
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
       
    }))

);

export function usuarioReducer(state: UsuarioState | undefined, action: Action) {
    return _usuarioReducer(state, action);
}