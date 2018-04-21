import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ICurso } from '../modelos/curso.model';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { AngularFireStorage } from 'angularfire2/storage';



@Injectable()
export class CursoService {

  constructor(private afs: AngularFirestore, private dialogo: MatDialog, private almacenamiento: AngularFireStorage) { }

  listar(): Observable<any> {
    const coleccion: AngularFirestoreCollection<ICurso> = this.afs.collection<ICurso>("curso")

    //return coleccion.valueChanges()
    return coleccion.snapshotChanges()
  }

  insertar(curso: ICurso): Promise<any> {
    const coleccion: AngularFirestoreCollection<ICurso> = this.afs.collection<ICurso>("curso")

    return coleccion.add(curso)
  }

  detallar(id: string): Observable<ICurso> {
    const document = this.afs.doc<ICurso>(`curso/${id}`)

    return document.valueChanges()
  }

  actualizar(id: string, curso: ICurso): Promise<void> {
    const document = this.afs.doc<ICurso>(`curso/${id}`)

    return document.update(curso)
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

  imagen(archivo: any, id: string): Observable<string> {
    const tarea = this.almacenamiento.upload(`curso/${id}`, archivo)

    return tarea.downloadURL()
  }

  obtenerImagen(id: string): Observable<any> {
    const referencia = this.almacenamiento.ref(`curso/${id}`)

    return referencia.getDownloadURL()
  }

}
