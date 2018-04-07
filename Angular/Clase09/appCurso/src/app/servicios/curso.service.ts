import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ICurso } from '../modelos/curso.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CursoService {

  constructor(private afs: AngularFirestore) { }

  listar(): Observable<ICurso[]>{
    const coleccion: AngularFirestoreCollection<ICurso>  = this.afs.collection<ICurso>("curso")

    return coleccion.valueChanges()
  }

  insertar(){

  }

  detallar(){

  }

  actualizar(){

  }

  eliminar(){

  }

}
