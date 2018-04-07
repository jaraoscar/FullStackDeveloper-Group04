import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PreloadAllModules } from '@angular/router';
import { AutenticacionGuard } from '../servicios/autenticacion.guard';

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "alumno", loadChildren: "../alumno/alumno.module#AlumnoModule", canLoad: [AutenticacionGuard] },
  { path: "curso", loadChildren: "../curso/curso.module#CursoModule", canLoad: [AutenticacionGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class NucleoRoutingModule { }
