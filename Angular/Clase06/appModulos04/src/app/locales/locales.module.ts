import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalesRoutingModule } from './locales-routing.module';
import { ListadoLocalesComponent } from 'app/locales/listado-locales/listado-locales.component';
import { EdicionLocalesComponent } from 'app/locales/edicion-locales/edicion-locales.component';
import { InsercionLocalesComponent } from 'app/locales/insercion-locales/insercion-locales.component';

@NgModule({
  imports: [
    CommonModule,
    LocalesRoutingModule
  ],
  declarations: [
    ListadoLocalesComponent,
    EdicionLocalesComponent,
    InsercionLocalesComponent
  ]
})
export class LocalesModule { }
