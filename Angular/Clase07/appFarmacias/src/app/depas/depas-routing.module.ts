import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoDepasComponent } from 'app/depas/listado-depas/listado-depas.component';
import { EdicionDepasComponent } from 'app/depas/edicion-depas/edicion-depas.component';

const routes: Routes = [
  {path: "", children:[
    {path: "", component: ListadoDepasComponent},
    {path: "edicion/:id", component: EdicionDepasComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepasRoutingModule { }
