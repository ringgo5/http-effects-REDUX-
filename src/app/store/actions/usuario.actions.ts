import { createAction,props } from '@ngrx/store';
import { Usuario } from 'src/app/modelos/usuario.model';

export const cargarUsuario = createAction(
    '[Usuarios] cArgar usuarios',
    props<{id:string}>()
    );

export const cargarUsuarioSuccess = createAction(
    '[Usuarios] CCargar usuario success',
    props<{usuario:Usuario}>() //esta accion recibira el array de usuarios. Cuando la carga haya sido satisfactoria
);

export const cargarUsuarioError = createAction(
    '[Usuarios] Cargar usuario success error',
    props<{payload:any}>()
);