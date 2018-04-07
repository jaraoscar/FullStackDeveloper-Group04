import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "alumno", loadChildren: "../alumno/alumno.module#AlumnoModule" },
  { path: "curso", loadChildren: "../curso/curso.module#CursoModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class NucleoRoutingModule { }
