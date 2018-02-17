import { Component } from '@angular/core';
import { Iservidor } from './iservidor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servidores: Iservidor[] = []
  seleccionado: Iservidor

  agregar(servidor: Iservidor) {
    this.servidores.push(servidor)
  }

  seleccionar(servidor: Iservidor) {
    this.seleccionado = servidor
  }


}
