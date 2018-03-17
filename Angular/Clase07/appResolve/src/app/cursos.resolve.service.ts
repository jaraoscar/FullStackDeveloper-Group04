import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";


interface iCurso {
    idCurso: number,
    titulo: string
}

@Injectable()
export class CursosResolve implements Resolve<iCurso[]> {

    constructor(private http: HttpClient) {}

    resolve(): Observable<iCurso[]> {
        return this.http.get<iCurso[]>("http://cursos.tibajodemanda.com/cursos", {observe: "body", responseType: "json"})
    }
}