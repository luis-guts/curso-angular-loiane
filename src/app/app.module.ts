import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { Teste2Component } from './teste2/teste2.component';
import { CursosModule} from '../app/cursos/cursos.module'

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    Teste2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
