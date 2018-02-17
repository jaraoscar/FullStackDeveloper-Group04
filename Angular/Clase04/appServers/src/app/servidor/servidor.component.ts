import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Iservidor } from '../iservidor';

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css']
})
export class ServidorComponent implements OnInit {
  @Input() servidor: Iservidor
  @Output() onSeleccion1 = new EventEmitter<Iservidor>()

  constructor() { }

  ngOnInit() {
  }

  seleccionar(){
    this.onSeleccion1.emit(this.servidor)
  }

}
