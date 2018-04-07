import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { PopupCursoComponent } from './popup-curso/popup-curso.component';
import { ListadoCursoComponent } from './listado-curso/listado-curso.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule,
    MaterialModule
  ],
  declarations: [PopupCursoComponent, ListadoCursoComponent],
  entryComponents: [PopupCursoComponent]
})
export class CursoModule { }
