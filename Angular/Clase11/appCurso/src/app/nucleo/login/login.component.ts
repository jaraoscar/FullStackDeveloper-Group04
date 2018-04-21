import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutenticacionService } from '../../servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ingreso: FormGroup

  constructor(private auth: AutenticacionService) { }

  ngOnInit() {
    this.ingreso = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, Validators.required)
    })

    this.auth.inicializar()
  }

  login(){
    const correo = this.ingreso.value.correo
    const contrasena = this.ingreso.value.contrasena

    this.auth.login(correo, contrasena)
  }

}
