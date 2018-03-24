import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { PopupComponent } from './popup/popup.component';
import { MenuMovilComponent } from './menu-movil/menu-movil.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import { ListadoMateriasComponent } from './listado-materias/listado-materias.component';
import { HomeComponent } from './home/home.component'

import {RouterModule, Routes} from '@angular/router'

const rutas: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "materias", component: ListadoMateriasComponent},
  {path: "cursos", component: ListadoCursosComponent},
  {path: "alumnos", component: ListadoAlumnosComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    PopupComponent,
    MenuMovilComponent,
    ListadoAlumnosComponent,
    ListadoCursosComponent,
    ListadoMateriasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  entryComponents:[PopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
