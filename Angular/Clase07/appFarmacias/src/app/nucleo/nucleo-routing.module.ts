import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/nucleo/login/login.component';
import { HomeComponent } from 'app/nucleo/home/home.component';

const routes: Routes = [
  {path: "", component: LoginComponent, pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "depas", loadChildren: "../depas/depas.module#DepasModule"},
  {path: "locales", loadChildren: "../locales/locales.module#LocalesModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NucleoRoutingModule { }
