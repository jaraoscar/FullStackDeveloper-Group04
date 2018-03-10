import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListadoDepartamentosComponent } from 'app/departamentos/listado-departamentos/listado-departamentos.component';
import { EdicionDepartamentosComponent } from 'app/departamentos/edicion-departamentos/edicion-departamentos.component';
import { InsercionDepartamentosComponent } from 'app/departamentos/insercion-departamentos/insercion-departamentos.component';

const rutas: Routes = [
    {path: "", children: [
        {path: "", component: ListadoDepartamentosComponent},
        {path: "edicion", component: EdicionDepartamentosComponent},
        {path: "nuevo", component: InsercionDepartamentosComponent}
      ]}
]

@NgModule({
    declarations: [
    ],
    imports:[
        RouterModule.forChild(rutas)
    ]
})
export class DepaRouting {}