import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from 'app/nucleo/cabecera/cabecera.component';
import { HomeComponent } from 'app/nucleo/home/home.component';
import { LoginComponent } from 'app/nucleo/login/login.component';
import { AppRouting } from 'app/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRouting
  ],
  declarations: [
    CabeceraComponent,
    HomeComponent,
    LoginComponent
  ],
  exports: [AppRouting, CabeceraComponent]
})
export class NucleoModule { }
