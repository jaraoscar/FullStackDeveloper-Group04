import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Iservidor } from '../iservidor';
import { DataService } from '../data.service';

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css']
})
export class ServidorComponent implements OnInit {
  @Input() servidor: Iservidor


  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  seleccionar(){
    this.dataService.servidorSeleccionado(this.servidor)
  }

}
