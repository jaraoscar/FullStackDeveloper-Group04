import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepasRoutingModule } from './depas-routing.module';
import { ListadoDepasComponent } from './listado-depas/listado-depas.component';
import { EdicionDepasComponent } from './edicion-depas/edicion-depas.component';
import { DepaComponent } from './depa/depa.component';

@NgModule({
  imports: [
    CommonModule,
    DepasRoutingModule
  ],
  declarations: [ListadoDepasComponent, EdicionDepasComponent, DepaComponent]
})
export class DepasModule { }
