import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoCursoComponent } from './listado-curso/listado-curso.component';

const routes: Routes = [
  {path: "", component: ListadoCursoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
