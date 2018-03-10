import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'

import { ListadoDepartamentosComponent } from './listado-departamentos/listado-departamentos.component';
import { EdicionDepartamentosComponent } from './edicion-departamentos/edicion-departamentos.component';
import { InsercionDepartamentosComponent } from './insercion-departamentos/insercion-departamentos.component';
import { ListadoLocalesComponent } from './listado-locales/listado-locales.component';
import { EdicionLocalesComponent } from './edicion-locales/edicion-locales.component';
import { InsercionLocalesComponent } from './insercion-locales/insercion-locales.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component';


const rutas: Routes = [
    {path: "", component: LoginComponent, pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "departamentos", children: [
      {path: "", component: ListadoDepartamentosComponent},
      {path: "edicion", component: EdicionDepartamentosComponent},
      {path: "nuevo", component: InsercionDepartamentosComponent}
    ]},
    {path: "locales", children: [
      {path: "", component: ListadoLocalesComponent},
      {path: "edicion", component: EdicionLocalesComponent},
      {path: "nuevo", component: InsercionLocalesComponent}
    ]}
  ]

@NgModule({
 declarations: [
    ListadoDepartamentosComponent,
    EdicionDepartamentosComponent,
    InsercionDepartamentosComponent,
    ListadoLocalesComponent,
    EdicionLocalesComponent,
    InsercionLocalesComponent,
    LoginComponent,
    HomeComponent,
    CabeceraComponent
 ],
 imports: [
     RouterModule.forRoot(rutas)
 ],
 exports: [
     RouterModule,
     CabeceraComponent
 ]
})
export class AppRouting {}