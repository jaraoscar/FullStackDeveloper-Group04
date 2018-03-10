import { Injectable, EventEmitter } from '@angular/core';
import { IUsuario } from 'app/i-usuario';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  /*private usuarios: IUsuario[] = [
    { idUsuario: 1, correo: "shidalgo@correo.com", contrasena: "123", rol: "admin" },
    { idUsuario: 2, correo: "andrea@correo.com", contrasena: "123", rol: "operador" }
  ]*/

  private estadoUsuario: boolean = false

  cambioEstado = new EventEmitter<boolean>()

  constructor(private ruteador: Router, private http: HttpClient) { }

  login(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>("http://cursos.tibajodemanda.com/usuarios/login", usuario, {
      observe: 'body', responseType: "json"
    })
  }

  /*login(usuario: IUsuario): string {
    const usuarioEncontrado = this.usuarios.find(elem => {
      if(elem.correo.toLowerCase().trim()===usuario.correo.toLowerCase().trim()) {
        return true
      }

      return false
    })

    if(usuarioEncontrado) {
      localStorage.setItem("logueado", JSON.stringify(usuarioEncontrado))
      //this.estadoUsuario = true
      this.cambioEstado.emit(true)
    }

    return usuarioEncontrado ? "" : "Correo y/o contraseña no válidos"

   }*/

  logout() { 
    //this.estadoUsuario = false
    localStorage.clear()
    this.cambioEstado.emit(false)
    this.ruteador.navigate([""])
  }

  estaAutenticado(): boolean { 
    if(localStorage.getItem("logueado")) {
      return true
    }

    return false
    // return this.estadoUsuario
  }

  rolUsuario(): string {
    const usuario: string = localStorage.getItem("logueado")

    return JSON.parse(usuario).rol
  }

}
