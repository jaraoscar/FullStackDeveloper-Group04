import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Iservidor } from '../iservidor';
import { NgForm } from '@angular/forms'
import { DataService } from '../data.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  servidor: Iservidor = {}
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  agregar() {
    this.dataService.agregar(this.servidor)
    this.servidor = {}
  }

}
