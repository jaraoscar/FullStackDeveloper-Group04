import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input() libros: Libro[]

  constructor() { }

  ngOnInit() {
  }

}
