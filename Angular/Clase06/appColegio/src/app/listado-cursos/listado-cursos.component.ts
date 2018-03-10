import { Component, OnInit } from '@angular/core';
import { CursoService } from 'app/curso.service';
import { ICurso } from 'app/i-curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {

  private listado: ICurso[] = []

  constructor(private cursoService: CursoService, private ruteador: Router) { }

  ngOnInit() {
    this.listar()
  }

  listar() {
    this.cursoService.listado()
      .subscribe(
      (data: ICurso[]) => {
        this.listado = data
      },
      (error: any) => console.log(error)
      )
  }

  editar(id: number) {
    this.ruteador.navigate(["cursos", "edicion", id])
  }

  eliminar(id: number) {
    if (confirm("¿Está seguro de querer eliminar?")) {
      this.cursoService.eliminacion(id)
        .subscribe(
        (data: ICurso) => {
          this.listar()
        },

        (error: any) => console.log(error)
        )
    }

  }

}
