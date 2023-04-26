import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/modelos/usuario.model';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/appReducer';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  usuario1:Usuario | undefined;
  loading:boolean=false;
  error:any;

  constructor(
    private router:ActivatedRoute,
    private store:Store<AppState>
    
  ){}



  ngOnInit() {

    this.store.select('usuario').subscribe(({user,loading,error})=>{
      this.usuario1=user;
      this.loading=loading;
      this.error=error;
    })
    this.router.params.subscribe(({id})=>{
      this.store.dispatch(cargarUsuario({id}))
    })
  }

  

}
