import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servidores: Array<{}> = []

  agregar(dato){
    this.servidores.push(dato)
    console.log(this.servidores)
    console.log("Servidor agregado")
  }
}
