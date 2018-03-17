import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface iCurso {
  idCurso: number,
  titulo: string
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: iCurso[]

  lista: any

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.rutaActiva.data
      .subscribe(
      data => {
        this.cursos = data.listaCursos
        this.lista = data.listaAlumnos
      }
      )

  }

}
