import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { MaterialModule } from '../material/material.module';
import { FechaPipe } from './fecha.pipe';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ConfirmacionComponent, FechaPipe],
  exports: [ConfirmacionComponent, FechaPipe],
  entryComponents: [ConfirmacionComponent]
})
export class CompartidoModule { }
