import { Component, OnInit } from '@angular/core';
import { ICurso } from 'app/i-curso';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'app/curso.service';

@Component({
  selector: 'app-curso-nuevo',
  templateUrl: './curso-nuevo.component.html',
  styleUrls: ['./curso-nuevo.component.css']
})
export class CursoNuevoComponent implements OnInit {

  curso: ICurso = {titulo: ""}
  desactivado: boolean = false

  constructor(private rutaActiva: ActivatedRoute, private cursoService: CursoService, private ruteador: Router) { }


  ngOnInit() {

  }

  grabar(){
    this.desactivado = true
    this.cursoService.insercion(this.curso)
      .subscribe(
        (data: ICurso) => {
          this.desactivado = false
          this.ruteador.navigate(["cursos"])
        },
        (error: any) => console.log(error)
      )
    
  }

}
