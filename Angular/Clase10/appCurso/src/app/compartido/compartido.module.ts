import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ConfirmacionComponent],
  exports: [ConfirmacionComponent],
  entryComponents: [ConfirmacionComponent]
})
export class CompartidoModule { }
