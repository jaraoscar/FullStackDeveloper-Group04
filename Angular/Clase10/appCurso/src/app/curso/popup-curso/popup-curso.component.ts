import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CursoService } from '../../servicios/curso.service';
import { ICurso } from '../../modelos/curso.model';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-popup-curso',
  templateUrl: './popup-curso.component.html',
  styleUrls: ['./popup-curso.component.css']
})
export class PopupCursoComponent implements OnInit {
  eliminado: boolean = false

  grupo: FormGroup

  constructor(private cursoService: CursoService, private popup: MatDialogRef<PopupCursoComponent>) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      titulo: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required)
    })
  }

  agregar(){
    const curso: ICurso = {
      titulo: this.grupo.value.titulo,
      fechaCreacion: this.grupo.value.fecha.getTime(),
      eliminado: this.eliminado
    }

    this.cursoService.insertar(curso)
      .then(()=> {
        this.popup.close(true)
      })
      .catch( error => console.log(error))
  }

  /*cambiarEstado(evento) {
    this.eliminado = evento.checked
  }*/

}
