import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Iservidor } from '../iservidor';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input() servidores: Iservidor[]

  constructor() { }

  ngOnInit() {
  }


}
