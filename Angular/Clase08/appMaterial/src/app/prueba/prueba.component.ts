import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  avance: number = 0
  timer: number
  signIn: FormGroup

  fechaMaxima: Date
  fechaMinima: Date

  constructor() { }

  ngOnInit() {
    this.fechaMaxima = new Date()
    this.fechaMaxima.setFullYear(this.fechaMaxima.getFullYear() - 18)

    this.fechaMinima = new Date()
    this.fechaMinima.setFullYear(this.fechaMinima.getFullYear() - 50)

    this.timer = setInterval(()=>{
      this.avance += 20
      if(this.avance >= 100) {
        this.avance = 100
        clearInterval(this.timer)
      }
    }, 1000)

    this.signIn = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, Validators.required)
    })



  }

  botonSeleccionado(btn){
    console.log(btn.value)
  }

}
