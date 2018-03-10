import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from "app/nucleo/login/login.component";
import { HomeComponent } from "app/nucleo/home/home.component";


const rutas: Routes = [
    {path: "", component: LoginComponent, pathMatch: "full"},
    {path: "home", component: HomeComponent}
  ]

@NgModule({
 declarations: [
 ],
 imports: [
     RouterModule.forRoot(rutas)
 ],
 exports: [
     RouterModule
 ]
})
export class AppRouting {}