import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../servicios/curso.service';
import { ICurso } from '../../modelos/curso.model';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PopupCursoComponent } from '../popup-curso/popup-curso.component';
import { ConfirmacionComponent } from '../../compartido/confirmacion/confirmacion.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-listado-curso',
  templateUrl: './listado-curso.component.html',
  styleUrls: ['./listado-curso.component.css']
})
export class ListadoCursoComponent implements OnInit {

  columnasAMostrar: Array<string> = ["titulo", "fechaCreacion", "eliminado", "accion"]

  dataSource: MatTableDataSource<ICurso>

  suscripcion: Subscription

  constructor(private cursoService: CursoService, private dialogo: MatDialog) { }

  ngOnInit() {
    this.listado()
  }

  listado() {
    this.cursoService.listar()
      .subscribe(
      (datos: any) => {
        const resultados = datos.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          }
          //console.log(item.payload.doc.id)
          //console.log(item.payload.doc.data())
          /*console.log({
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          })*/
        })
        //console.log(datos)
        this.dataSource = new MatTableDataSource<ICurso>(resultados)
      }
      )
  }

  abrirPopup(){
    this.popupCurso(true)
  }

  modificar(id: string) {
    this.suscripcion = this.cursoService.detallar(id)
      .subscribe(
      (data: ICurso) => {
        console.log("detallar")
        this.suscripcion.unsubscribe()
        this.popupCurso(false, { id, ...data })
      },
      error => console.log(error)
      )
  }

  eliminar(id: string) {
    const referencia = this.dialogo.open(ConfirmacionComponent, {
      data: { mensaje: "¿Está seguro de querer eliminar" },
      width: "300"
    })

    referencia.afterClosed()
      .subscribe(
      respuesta => {
        console.log(typeof (respuesta))
        if (respuesta === "true") {
          this.cursoService.eliminar(id)
        }
      }
      )

    /*.then(
      ()=> console.log("registro eliminado")
    )
    .catch(
      error => console.log(error)
    )*/
  }

  popupCurso(accion: boolean, datos = null) {
    const referencia  = this.dialogo.open(PopupCursoComponent, {
        data: { accion, datos },
        //disableClose: true,
        height: "400"
      })

    referencia.afterClosed()
      .subscribe(
      respuesta => {
        if (respuesta === true) {
          // this.listado()
          // Actualizan el listado
        } else if (respuesta === false) {
          // No se hace nada
        } else {
          // No se hace nada
        }
      }
      )
  }

}
