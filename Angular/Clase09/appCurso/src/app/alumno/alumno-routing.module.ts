import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoAlumnoComponent } from './listado-alumno/listado-alumno.component';
import { AutenticacionGuard } from '../servicios/autenticacion.guard';

const routes: Routes = [
  {path: "", component: ListadoAlumnoComponent, canActivate: [AutenticacionGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
