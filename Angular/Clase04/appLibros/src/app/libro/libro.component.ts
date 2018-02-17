import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input() libro: Libro

  constructor() { }

  ngOnInit() {
  }

}
