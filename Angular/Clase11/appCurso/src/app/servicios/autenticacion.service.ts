import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class AutenticacionService {

  autenticado: boolean = false

  cambioEstado: Subject<boolean> = new Subject<boolean>()

  constructor(private af: AngularFireAuth, private ruteador: Router) { }

  inicializar(){
    this.af.auth.onAuthStateChanged(usuario => {
      if(usuario) {
        this.autenticado = true
        this.cambioEstado.next(true)
        this.ruteador.navigate(["curso"])
      } else {
        this.autenticado = false
        this.cambioEstado.next(false)
        this.ruteador.navigate([""])
      }
    })
  }

  login(correo: string, contrasena: string){
    this.af.auth.signInWithEmailAndPassword(correo, contrasena)
      /*.then(()=> {
        this.autenticado = true
        this.cambioEstado.next(true)
        console.log("logueado")
      })
      .catch((error)=>{
        console.log(error)
      })*/
  }

  registro(correo: string, contrasena: string): Promise<any>{
    return this.af.auth.createUserWithEmailAndPassword(correo, contrasena)
  }

  logout(){
    this.af.auth.signOut()
      /*.then(()=>{
        this.autenticado = false
        this.cambioEstado.next(false)
        console.log("deslogueado")
      })
      .catch( error => console.log(error))
      */
  }

}
