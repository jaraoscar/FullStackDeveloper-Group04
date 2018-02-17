import { Injectable, EventEmitter } from "@angular/core";
import { Iservidor } from "./iservidor";

@Injectable()
export class DataService {
    servidores: Iservidor[] = []
    seleccionado: Iservidor

    onServidorSeleccionado = new EventEmitter<Iservidor>()

    listado(): Array<Iservidor> {
        return this.servidores
    }

    agregar(servidor: Iservidor): void {
        this.servidores.push(servidor)
    }

    servidorSeleccionado(servidor: Iservidor) {
        this.seleccionado = servidor
        this.onServidorSeleccionado.emit(servidor)
    }

}