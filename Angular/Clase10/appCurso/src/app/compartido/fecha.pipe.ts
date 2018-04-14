import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform (value: number): Date {
    const fecha = new Date(value)
    return fecha;
  }

}
