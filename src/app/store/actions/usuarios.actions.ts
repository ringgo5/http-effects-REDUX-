import { createAction,props } from '@ngrx/store';
import { Usuario } from 'src/app/modelos/usuario.model';

export const cargarUsuarios = createAction('[Usuarios] cArgar usuarios');

export const cargarUsuariosSuccess = createAction(
    '[Usuarios] CCargar usuarios success',
    props<{usuarios:Usuario[]}>() //esta accion recibira el array de usuarios. Cuando la carga haya sido satisfactoria
);

export const cargarUsuariosError = createAction(
    '[Usuarios] Cargar usuarios success error',
    props<{payload:any}>()
);