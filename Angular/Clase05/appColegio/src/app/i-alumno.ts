import { ICurso } from "app/i-curso";

export interface IAlumno {
    idAlumno?: number,
    nombreCompleto: string,
    edad: number,
    idCurso?: number,
    datosCurso?: ICurso
}
