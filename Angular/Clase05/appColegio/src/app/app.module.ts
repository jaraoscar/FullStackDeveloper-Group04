import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import { AuthService } from 'app/auth.service';
import { AlumnoService } from 'app/alumno.service';
import { CursoService } from 'app/curso.service';

const rutas: Routes = [
  {path: "", component: LoginComponent, pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "alumnos", component: ListadoAlumnosComponent},
  {path: "cursos", component: ListadoCursosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListadoAlumnosComponent,
    ListadoCursosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule
  ],
  providers: [AuthService, AlumnoService, CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
