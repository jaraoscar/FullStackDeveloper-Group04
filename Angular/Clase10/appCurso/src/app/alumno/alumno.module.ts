import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { PopupAlumnoComponent } from './popup-alumno/popup-alumno.component';
import { ListadoAlumnoComponent } from './listado-alumno/listado-alumno.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    MaterialModule
  ],
  declarations: [PopupAlumnoComponent, ListadoAlumnoComponent],
  entryComponents: [PopupAlumnoComponent]
})
export class AlumnoModule { }
