import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoLocalesComponent } from 'app/locales/listado-locales/listado-locales.component';
import { EdicionLocalesComponent } from 'app/locales/edicion-locales/edicion-locales.component';

const routes: Routes = [
  {path: "", children:[
    {path: "", component: ListadoLocalesComponent},
    {path: "edicion/:id", component: EdicionLocalesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalesRoutingModule { }
