import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Libro } from '../libro';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit /*, Libro*/ {
  @Output() onNuevoLibro = new EventEmitter<Libro>()
  //@Output() onNuevoLibro = new EventEmitter<{}>()
  //@Output() onNuevoLibro = new EventEmitter<{titulo: string, autor: string, descripcion: string}>()

  /*titulo: string
  autor: string
  descripcion: string*/

  libro: Libro = {}

  constructor() { }

  ngOnInit() {
  }

  agregar(){
    this.onNuevoLibro.emit(this.libro)
    this.libro = {}
  }

}
