import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { CursosComponent } from './cursos/cursos.component';
import { CursosResolve } from 'app/cursos.resolve.service';
import { AlumnosResolve } from 'app/alumnos.resolve.service';

const rutas: Routes = [
  {path: "", component: CursosComponent, resolve: {listaCursos: CursosResolve, listaAlumnos: AlumnosResolve}}
]

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [CursosResolve, AlumnosResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
