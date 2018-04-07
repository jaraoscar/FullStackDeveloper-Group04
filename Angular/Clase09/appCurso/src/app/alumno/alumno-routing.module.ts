import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoAlumnoComponent } from './listado-alumno/listado-alumno.component';

const routes: Routes = [
  {path: "", component: ListadoAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
