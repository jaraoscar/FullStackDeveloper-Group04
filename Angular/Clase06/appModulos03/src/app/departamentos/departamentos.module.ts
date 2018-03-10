import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoDepartamentosComponent } from 'app/departamentos/listado-departamentos/listado-departamentos.component';
import { EdicionDepartamentosComponent } from 'app/departamentos/edicion-departamentos/edicion-departamentos.component';
import { InsercionDepartamentosComponent } from 'app/departamentos/insercion-departamentos/insercion-departamentos.component';
import { DepaRouting } from 'app/departamentos/depa-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DepaRouting
  ],
  declarations: [
    ListadoDepartamentosComponent,
    EdicionDepartamentosComponent,
    InsercionDepartamentosComponent
  ]
})
export class DepartamentosModule { }
