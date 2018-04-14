import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ICurso } from '../modelos/curso.model';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';



@Injectable()
export class CursoService {

  constructor(private afs: AngularFirestore, private dialogo: MatDialog) { }

  listar(): Observable<any> {
    const coleccion: AngularFirestoreCollection<ICurso> = this.afs.collection<ICurso>("curso")

    //return coleccion.valueChanges()
    return coleccion.snapshotChanges()
  }

  insertar(curso: ICurso): Promise<any> {
    const coleccion: AngularFirestoreCollection<ICurso> = this.afs.collection<ICurso>("curso")

    return coleccion.add(curso)
  }

  detallar() {

  }

  actualizar() {

  }

  eliminar(id) {

    this
      .afs
      .doc<ICurso>(`curso/${id}`)
      .delete()

    /*if (confirm("¿Está seguro de eliminar?")) {
      const documento = this.afs.doc<ICurso>(`curso/${id}`)

      return documento.delete()
    }*/
    //return Promise.resolve()

  }

}
