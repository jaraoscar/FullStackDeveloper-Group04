import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs'
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    /*const miObservador: Observable<number> = Observable.interval(1000)
    miObservador.subscribe(veces => console.log(veces))*/

    /*Observable.interval(1000)
      .subscribe(veces => console.log(veces))*/


    Observable.create(
      (observador: Observer<string>) => {
          setTimeout(()=>{
            observador.next("Resultado del api 01")
          },2000)

          setTimeout(()=>{
            observador.next("Resultado del api 02")
          },4000)

          setTimeout(()=>{
            observador.complete()
          },6000)

          setTimeout(()=>{
            observador.error("Ocurrió un error a los 8s")
          },8000)

          setTimeout(()=>{
            observador.next("Resultado del api 03")
          },10000)


      }
    )
      .subscribe(
        (data: string) => console.log(data),
        (error: string) => console.log(error),
        () => console.log("Todo se terminó")
      )





  }
}
