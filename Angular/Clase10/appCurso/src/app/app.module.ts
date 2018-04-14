import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { LOCALE_ID } from '@angular/core';


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

import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireStorageModule } from 'angularfire2/storage'
import { environment } from '../environments/environment';
import { RegistroComponent } from './nucleo/registro/registro.component';
import { MAT_DATE_LOCALE } from '@angular/material';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NucleoModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [AlumnoService, CursoService, AutenticacionService, AutenticacionGuard, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  {provide: LOCALE_ID, useValue: 'es-ES' }],
  bootstrap: [AppComponent],
  entryComponents: [RegistroComponent]
})
export class AppModule { }
