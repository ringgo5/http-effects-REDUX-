import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'


//modulo de rutas
import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
//modulos personalizados
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios/usuarios.module';



@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsuariosModule,
    HttpClientModule
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
