import { Component } from "@angular/core";

@Component({
    selector: "[app-micomponent]",
    templateUrl: "./miComponent.html",
    /*template: `
        <h1>Mi Componente1</h1>
        <div class='contenedor'>{{titulo}}</div>
        <div class='container'>
            <div class='row'></div>
        </div>`,*/
    styleUrls: ["./miComponent.css"]
    // styles:['h1 {color:red;font-size:30px}']
})
export class miComponent {
    titulo: string = "Curso FullStack"
    activa: boolean = false

    constructor(){
        setTimeout(() => {
            this.titulo = "Curso FullStack (JS+Angular+Node)"
        }, 3000)

        /*setInterval(()=>{
            this.activa = !this.activa
        }, 1000)*/
    }

    cambiarActiva(){
        this.activa = true
    }
}