import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../servicios/curso.service';
import { ICurso } from '../../modelos/curso.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-listado-curso',
  templateUrl: './listado-curso.component.html',
  styleUrls: ['./listado-curso.component.css']
})
export class ListadoCursoComponent implements OnInit {

  columnasAMostrar: Array<string> = ["titulo", "fechaCreacion", "eliminado"]

  dataSource: MatTableDataSource<ICurso>

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursoService.listar()
      .subscribe(
        (datos: ICurso[]) => {
          this.dataSource = new MatTableDataSource<ICurso>(datos)
        }
      )
  }

}
