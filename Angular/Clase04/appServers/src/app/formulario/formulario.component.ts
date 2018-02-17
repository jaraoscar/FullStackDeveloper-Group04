import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Iservidor } from '../iservidor';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() onNuevoServidor = new EventEmitter<Iservidor>()

  servidor: Iservidor = {}
  constructor() { }

  ngOnInit() {
  }

  agregar() {
    this.onNuevoServidor.emit(this.servidor)
    this.servidor = {}
  }

}
