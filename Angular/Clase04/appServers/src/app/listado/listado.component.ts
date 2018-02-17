import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Iservidor } from '../iservidor';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input() servidores: Iservidor[]
  @Output() onSeleccion2 = new EventEmitter<Iservidor>()


  constructor() { }

  ngOnInit() {
  }

  seleccionar(servidor: Iservidor) {
    this.onSeleccion2.emit(servidor)
  }

}
