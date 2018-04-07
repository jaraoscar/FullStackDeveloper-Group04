import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoCursoComponent } from './listado-curso/listado-curso.component';
import { AutenticacionGuard } from '../servicios/autenticacion.guard';

const routes: Routes = [
  {path: "", component: ListadoCursoComponent, canActivate: [AutenticacionGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
