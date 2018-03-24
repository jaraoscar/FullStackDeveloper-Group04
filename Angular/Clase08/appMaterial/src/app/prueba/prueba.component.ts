import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { PopupComponent } from '../popup/popup.component';

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

  constructor(private dialogo: MatDialog, private snack: MatSnackBar) { }

  ngOnInit() {
    this.fechaMaxima = new Date()
    this.fechaMaxima.setFullYear(this.fechaMaxima.getFullYear() - 18)

    this.fechaMinima = new Date()
    this.fechaMinima.setFullYear(this.fechaMinima.getFullYear() - 50)

    this.timer = setInterval(() => {
      this.avance += 20
      if (this.avance >= 100) {
        this.avance = 100
        clearInterval(this.timer)
      }
    }, 1000)

    this.signIn = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required),
      terminos: new FormControl(null, Validators.requiredTrue),
      sexo: new FormControl(null, Validators.required)
    })
  }

  cambiarColor(dato) {
    console.log(dato)
  }

  ingresar() {
    console.log(this.signIn)
  }

  botonSeleccionado(btn) {
    console.log(btn.value)
  }

  abrirPopup(){
    let respuesta: MatDialogRef<PopupComponent> = this.dialogo.open(PopupComponent, {
      data: {alumno: 'Juan Pérez', curso: "Matemáticas"},
      disableClose: true
    })

    respuesta.afterClosed().subscribe(
      dataDevuelta => {
        console.log(dataDevuelta)
        this.snack.open("Registro grabado", "", {
          duration: 2000
        })

        // this.snack.openFromComponent(NotificadorComponent)
      }
    )

  }

}
