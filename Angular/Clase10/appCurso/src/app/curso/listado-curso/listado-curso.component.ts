import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../servicios/curso.service';
import { ICurso } from '../../modelos/curso.model';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PopupCursoComponent } from '../popup-curso/popup-curso.component';

@Component({
  selector: 'app-listado-curso',
  templateUrl: './listado-curso.component.html',
  styleUrls: ['./listado-curso.component.css']
})
export class ListadoCursoComponent implements OnInit {

  columnasAMostrar: Array<string> = ["titulo", "fechaCreacion", "eliminado"]

  dataSource: MatTableDataSource<ICurso>

  constructor(private cursoService: CursoService, private dialogo: MatDialog) { }

  ngOnInit() {
    this.cursoService.listar()
      .subscribe(
        (datos: ICurso[]) => {
          this.dataSource = new MatTableDataSource<ICurso>(datos)
        }
      )
  }

  popupCurso(accion: boolean) {
    this.dialogo.open(PopupCursoComponent, {
      data: {accion},
      disableClose: true
    })
  }

}
