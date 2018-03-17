import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/delay'


@Injectable()
export class AlumnosResolve implements Resolve<{}> {

    resolve(): Observable<{}>{

        return Observable.of({
            nombre: "Sergio",
            apellido: "Hidalgo"
        }).delay(5000)

    }

}