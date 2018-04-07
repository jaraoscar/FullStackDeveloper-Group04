import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AlumnoService } from './servicios/alumno.service';
import { CursoService } from './servicios/curso.service';
import { AutenticacionService } from './servicios/autenticacion.service';
import { AutenticacionGuard } from './servicios/autenticacion.guard';
import { PopupAlumnoComponent } from './alumno/popup-alumno/popup-alumno.component';
import { PopupCursoComponent } from './curso/popup-curso/popup-curso.component';
import { NucleoModule } from './nucleo/nucleo.module';
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NucleoModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [AlumnoService, CursoService, AutenticacionService, AutenticacionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
