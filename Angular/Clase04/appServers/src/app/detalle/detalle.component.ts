import { Component, OnInit, Input } from '@angular/core';
import { Iservidor } from '../iservidor';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() server: Iservidor

  constructor() { }

  ngOnInit() {
  }

}
