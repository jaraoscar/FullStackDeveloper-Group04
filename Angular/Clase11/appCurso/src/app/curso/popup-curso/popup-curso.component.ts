import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CursoService } from '../../servicios/curso.service';
import { ICurso } from '../../modelos/curso.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-popup-curso',
  templateUrl: './popup-curso.component.html',
  styleUrls: ['./popup-curso.component.css']
})
export class PopupCursoComponent implements OnInit {
  eliminado: boolean = false
  archivo: any

  rutaImagen: Observable<any>

  grupo: FormGroup

  constructor(private cursoService: CursoService, private popup: MatDialogRef<PopupCursoComponent>, @Inject(MAT_DIALOG_DATA) private datosRecibidos: any) { }

  ngOnInit() {
    if(this.datosRecibidos.accion) {
      this.grupo = new FormGroup({
        titulo: new FormControl(null, Validators.required),
        fecha: new FormControl(null, Validators.required)
      })
    } else {
      this.grupo = new FormGroup({
        titulo: new FormControl(this.datosRecibidos.datos.titulo, Validators.required),
        fecha: new FormControl(new Date(this.datosRecibidos.datos.fechaCreacion), Validators.required)
      })    
      
      this.eliminado = this.datosRecibidos.datos.eliminado

      this.rutaImagen = this.cursoService.obtenerImagen(this.datosRecibidos.datos.id)
        

    }
    
  }

  agregar(){
    const curso: ICurso = {
      titulo: this.grupo.value.titulo,
      fechaCreacion: this.grupo.value.fecha.getTime(),
      eliminado: this.eliminado
    }


    if(this.datosRecibidos.accion){
      this.cursoService.insertar(curso)
      .then(data=> {
        
        if(this.archivo) {
          this.cursoService.imagen(this.archivo, data.id)
            .subscribe(
              data => {
                console.log(data)
                this.popup.close(true)
              },
              error => console.log(error)
            )
        } else {
          this.popup.close(true)
        }

        
        
      })
      .catch( error => console.log(error))
    } else {
      this.cursoService.actualizar(this.datosRecibidos.datos.id, curso)
        .then(()=>{
          this.popup.close(true)
        })
        .catch( error => console.log(error))
    }
 

  }

  seleccion(evento){
    this.archivo = evento.target.files[0]
  }

  /*cambiarEstado(evento) {
    this.eliminado = evento.checked
  }*/

}
