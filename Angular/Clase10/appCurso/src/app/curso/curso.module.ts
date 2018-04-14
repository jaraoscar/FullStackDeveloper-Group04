import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { PopupCursoComponent } from './popup-curso/popup-curso.component';
import { ListadoCursoComponent } from './listado-curso/listado-curso.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CompartidoModule } from '../compartido/compartido.module';
import { ConfirmacionComponent } from '../compartido/confirmacion/confirmacion.component';
import { CursoService } from '../servicios/curso.service';

@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    CompartidoModule
  ],
  declarations: [PopupCursoComponent, ListadoCursoComponent],
  entryComponents: [PopupCursoComponent, ConfirmacionComponent]
})
export class CursoModule { }
