import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoLocalesComponent } from 'app/locales/listado-locales/listado-locales.component';
import { EdicionLocalesComponent } from 'app/locales/edicion-locales/edicion-locales.component';
import { InsercionLocalesComponent } from 'app/locales/insercion-locales/insercion-locales.component';

const routes: Routes = [
  {path: "locales", children: [
    {path: "", component: ListadoLocalesComponent},
    {path: "edicion", component: EdicionLocalesComponent},
    {path: "nuevo", component: InsercionLocalesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalesRoutingModule { }
