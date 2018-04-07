import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  imports: [
    CommonModule,
    NucleoRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [CabeceraComponent, MenuComponent, LoginComponent, RegistroComponent],
  exports: [CabeceraComponent, MenuComponent, NucleoRoutingModule, RegistroComponent]
})
export class NucleoModule { }
