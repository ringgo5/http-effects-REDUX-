import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import * as usuarios from '../actions'
import { catchError, map, mergeMap, of, tap } from 'rxjs'
import { UsuarioService } from 'src/app/services/usuario.service'

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        private usuariosService: UsuarioService

    ) { }

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuarios.cargarUsuario), //le mandamos que acción queremos a la que estar ligada
            //tap(data=>console.log('effect tap', data)), solo los uso para ver que informacion está pasando
            mergeMap(
                (action) => this.usuariosService.getUserById(action.id)
                    .pipe(
                        // tap(data=>console.log('getUsers effects' , data)) //usamos pipe/tap para cuando queremos ver el estado,lo que pasa
                        map(user => usuarios.cargarUsuarioSuccess({ usuario: user })), //los users son los que vienen fluyendo por el servicio,la data
                        catchError(error => of(usuarios.cargarUsuariosError({ payload: error })))
                    )
            )
        )
    )

}
