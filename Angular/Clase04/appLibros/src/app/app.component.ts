import { Component } from '@angular/core';
import { Libro } from './libro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //libros: Array<{}>
  //libros: Array<{titulo: string, autor: string, descripcion: string}>
  libros: Array<Libro> = []

  agregarLibro(dato: Libro){
    this.libros.push(dato)
  }

}
