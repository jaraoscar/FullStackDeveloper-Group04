import { Component, ViewChild, OnInit } from '@angular/core';
import { AutenticacionService } from './servicios/autenticacion.service';
import { MatDialog } from '@angular/material';
import { RegistroComponent } from './nucleo/registro/registro.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild("menuLateral") menuLateral

  usuarioLogueado: boolean = false

  constructor(private auth: AutenticacionService, private dialogo: MatDialog){}

  ngOnInit(){
    this.usuarioLogueado = this.auth.autenticado

    this.auth.cambioEstado
      .subscribe(
       (estado: boolean) => this.usuarioLogueado = estado
      )
  }

  cerrarMenuLateral() {
    this.menuLateral.close()
  }

  logout(){
    this.auth.logout()
  }

  abrirRegistro(){
    this.dialogo.open(RegistroComponent)
  }

}
