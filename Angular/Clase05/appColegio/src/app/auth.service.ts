import { Injectable } from '@angular/core';
import { IUsuario } from 'app/i-usuario';

@Injectable()
export class AuthService {

  private usuarios: IUsuario[] = [
    { idUsuario: 1, correo: "shidalgo@correo.com", contrasena: "123" },
    { idUsuario: 2, correo: "andrea@correo.com", contrasena: "123" }
  ]

  constructor() { }

  login(usuario: IUsuario): boolean {
    const usuarioEncontrado = this.usuarios.find(elem => {
      if(elem.correo.toLowerCase().trim()===usuario.correo.toLowerCase().trim()) {
        return true
      }

      return false
    })

    return usuarioEncontrado ? true : false

   }

  logout() { }

  estaAutenticado() { }

}
