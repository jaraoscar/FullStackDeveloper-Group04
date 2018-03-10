import { Injectable } from '@angular/core';
import { ICurso } from 'app/i-curso';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CursoService {

  constructor(private http: HttpClient) { }

  listado(): Observable<ICurso[]> {
    return this.http.get<ICurso[]>("http://cursos.tibajodemanda.com/cursos", {
      observe: "body", responseType: "json"
    })
  }

  insercion(curso: ICurso): Observable<ICurso> {
    return this.http.post<ICurso>("http://cursos.tibajodemanda.com/cursos", curso, {observe: "body", responseType: "json"})
  }

  actualizacion(curso: ICurso): Observable<ICurso> {
    return this.http.put<ICurso>(`http://cursos.tibajodemanda.com/cursos/${curso.idCurso}`, curso, {observe: "body", responseType: "json"})
  }

  eliminacion(id: number): Observable<ICurso> {
    return this.http.delete<ICurso>(`http://cursos.tibajodemanda.com/cursos/${id}`, {observe: "body", responseType: "json"})
  }

  detalle(id: number): Observable<ICurso> {
    return this.http.get<ICurso>(`http://cursos.tibajodemanda.com/cursos/${id}`, {observe: "body", responseType: "json"})
  }

}
