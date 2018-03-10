import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DepartamentosService } from 'app/departamentos.service';
import { LocalesService } from 'app/locales.service';
import { NucleoModule } from 'app/nucleo/nucleo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NucleoModule
  ],
  providers: [DepartamentosService, LocalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
