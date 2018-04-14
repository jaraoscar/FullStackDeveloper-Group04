import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { PopupCursoComponent } from './popup-curso/popup-curso.component';
import { ListadoCursoComponent } from './listado-curso/listado-curso.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [PopupCursoComponent, ListadoCursoComponent],
  entryComponents: [PopupCursoComponent]
})
export class CursoModule { }
