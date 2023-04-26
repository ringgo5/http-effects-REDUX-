import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/modelos/usuario.model';
import { cargarUsuarios } from 'src/app/store/actions/index';
//import { UsuarioService } from 'src/app/services/usuario.service';
import { AppState } from 'src/app/store/appReducer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios:Usuario[]=[];
  loading:boolean=false;
  error:any;

  constructor(
    //public usuarioService: UsuarioService

    private store:Store<AppState>

    
    ){}

  ngOnInit() {
      // this.usuarioService.getUsers().subscribe(
      //   users=>{
      //     console.log(users)
      //     this.usuarios=users
      //   }
      // );
      this.store.select('usuarios').subscribe(({users,loading,error})=>{
        //console.log(usuarios.users)
        this.usuarios=users;
        this.loading=loading;
        this.error=error;
      })
      this.store.dispatch(cargarUsuarios())
  }

}
