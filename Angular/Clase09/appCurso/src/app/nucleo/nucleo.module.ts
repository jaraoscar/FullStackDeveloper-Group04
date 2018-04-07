import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    NucleoRoutingModule,
    MaterialModule
  ],
  declarations: [CabeceraComponent, MenuComponent, LoginComponent],
  exports: [CabeceraComponent, MenuComponent, NucleoRoutingModule]
})
export class NucleoModule { }
