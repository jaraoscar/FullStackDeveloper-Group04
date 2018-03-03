import { Injectable } from '@angular/core';
import { ICurso } from 'app/i-curso';

@Injectable()
export class CursoService {
  private cursos: ICurso[] = [
    {idCurso: 1, titulo: "Javascript"},
    {idCurso: 2, titulo: "Angular"},
    {idCurso: 3, titulo: "Node"}
  ]

  constructor() { }

  listado():ICurso[] {
    return this.cursos.slice()
  }

  insercion(curso: ICurso): boolean {
    this.cursos.push(curso)

    return true
  }

  actualizacion(curso: ICurso): boolean {
    const posicion = this.cursos.findIndex(item => item.idCurso == curso.idCurso)

    this.cursos[posicion] = curso

    return true
  }

  eliminacion(id: number): boolean {
    const posicion = this.cursos.findIndex(item => item.idCurso == id)

    this.cursos.splice(posicion, 1)

    return true
  }

  detalle(id: number): ICurso {
    const posicion = this.cursos.findIndex(item => item.idCurso == id)

    return this.cursos[posicion]
  }

}
