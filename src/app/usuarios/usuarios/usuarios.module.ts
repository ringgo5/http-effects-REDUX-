import { NgModule } from '@angular/core';

//modulos
import { CommonModule } from '@angular/common';
//componentes
import { ListaComponent } from '../lista/lista.component';
import { UsuarioComponent } from '../usuario/usuario.component';



@NgModule({
  declarations: [
  
    UsuarioComponent,
    ListaComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
   
    UsuarioComponent,
    ListaComponent
  ]
})
export class UsuariosModule { }
