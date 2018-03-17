import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { HomeComponent } from './home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    NucleoRoutingModule
  ],
  declarations: [HomeComponent, CabeceraComponent, LoginComponent],
  exports: [NucleoRoutingModule, CabeceraComponent]
})
export class NucleoModule { }
