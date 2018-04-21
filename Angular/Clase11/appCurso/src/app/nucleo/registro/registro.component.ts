import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  ingreso: FormGroup

  constructor(private auth: AutenticacionService, private referencia: MatDialogRef<RegistroComponent>) { }

  ngOnInit() {
    this.ingreso = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, Validators.required)
    })

    this.auth.inicializar()
  }

  registro(){
    const correo = this.ingreso.value.correo
    const contrasena = this.ingreso.value.contrasena

    this.auth.registro(correo, contrasena)
      .then(()=> {
        this.referencia.close(true)
      })
  }

}
