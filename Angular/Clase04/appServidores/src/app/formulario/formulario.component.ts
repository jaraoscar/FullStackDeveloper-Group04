import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() onNuevoServidor = new EventEmitter()
  
  nombre: string = "Megaplaza"
  proveedor: string
  descripcion: string
  ip: string

  constructor() { }

  ngOnInit() {
  }

  agregarServidor(){
    this.onNuevoServidor.emit({nombre: this.nombre, proveedor: this.proveedor, descripcion: this.descripcion, ip: this.ip})

    //this.servidores.push({nombre: this.nombre, proveedor: this.proveedor, descripcion: this.descripcion, ip: this.ip})

    this.nombre = ""
    this.descripcion = ""
    this.proveedor = ""
    this.ip = ""

    console.log(this.servidores)

    console.log("servidor agregado")
  }

  ejecutar(f:any) {
    console.log(f)
  }

}
