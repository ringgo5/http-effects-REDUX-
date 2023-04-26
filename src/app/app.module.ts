import { NgModule, isDevMode } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'


//modulo de rutas
import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
//modulos personalizados
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios/usuarios.module';
import { appReducers } from './store/appReducer';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectArray } from './store/effects/index';



@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsuariosModule,
    HttpClientModule,
    EffectsModule.forRoot(EffectArray),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
