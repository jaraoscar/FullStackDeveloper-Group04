import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalesRoutingModule } from './locales-routing.module';
import { ListadoLocalesComponent } from './listado-locales/listado-locales.component';
import { EdicionLocalesComponent } from './edicion-locales/edicion-locales.component';
import { LocalComponent } from './local/local.component';

@NgModule({
  imports: [
    CommonModule,
    LocalesRoutingModule
  ],
  declarations: [ListadoLocalesComponent, EdicionLocalesComponent, LocalComponent]
})
export class LocalesModule { }
