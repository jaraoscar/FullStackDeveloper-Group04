import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { IUsuario } from 'app/i-usuario';

import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: IUsuario = {correo: "", contrasena: ""}

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.auth.login(this.usuario)
  }

}
