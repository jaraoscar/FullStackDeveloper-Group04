import { Component, OnInit, Input } from '@angular/core';
import { Iservidor } from '../iservidor';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  server: Iservidor

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.server = this.dataService.seleccionado
    this.dataService.onServidorSeleccionado.subscribe(
      (servidor: Iservidor) => {
        this.server = servidor
      }
    )
  }

}
