import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarLista'
})
export class FiltrarListaPipe implements PipeTransform {

  transform(value: any, filtro: string, columna1: string, columna2: string): any {
    if(filtro.trim() == "") {
      return value
    }

    const resultados = []

    for(let item of value) {
      if((item[columna1].toLowerCase().trim().indexOf(filtro.toLowerCase().trim()) != -1) || (item[columna2].toLowerCase().trim().indexOf(filtro.toLowerCase().trim()) != -1)) {
        resultados.push(item)
      }
    }

    return resultados
  }

}
