import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import * as usuarios from '../actions'
import { catchError, map, mergeMap, of, tap } from 'rxjs'
import { UsuarioService } from 'src/app/services/usuario.service'

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        private usuariosService: UsuarioService

    ) { }

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuarios.cargarUsuarios), //le mandamos que acción queremos a la que estar ligada
            //tap(data=>console.log('effect tap', data)), solo los uso para ver que informacion está pasando
            mergeMap(
                () => this.usuariosService.getUsers()
                    .pipe(
                        // tap(data=>console.log('getUsers effects' , data)) //usamos pipe/tap para cuando queremos ver el estado,lo que pasa
                        map(users => usuarios.cargarUsuariosSuccess({ usuarios: users })), //los users son los que vienen fluyendo por el servicio,la data
                        catchError(error => of(usuarios.cargarUsuariosError({ payload: error })))
                    )
            )
        )
    )

}






