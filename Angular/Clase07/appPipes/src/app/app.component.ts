import { Component, OnInit } from '@angular/core';

interface iPelicula {
  titulo: string
  tipo: string
  fecha: Date,
  actorPrincipal: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  filtro: string = ""

  peliculas: iPelicula[] = [
    { titulo: "Río Bravo", tipo: "western", fecha: new Date(2, 5, 1953), actorPrincipal: "John Wayne" },
    { titulo: "Asesinos", tipo: "western", fecha: new Date(4, 7, 2012), actorPrincipal: "Pierce Brossman" },
    { titulo: "Los Dioses de Egipto", tipo: "fantasía", fecha: new Date(6, 10, 2016), actorPrincipal: "Gerald Butter" },
    { titulo: "El Color del Dinero", tipo: "drama", fecha: new Date(5, 8, 2009), actorPrincipal: "Bruce Willis" }
  ]

  ngOnInit() {

  }

}
