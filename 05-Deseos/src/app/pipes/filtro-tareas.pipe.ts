import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroTareas',
  pure: false
})
export class FiltroTareasPipe implements PipeTransform {

  transform( lista: Lista[], completada: boolean = true): Lista[] {
    
    return lista.filter( lista => lista.terminada === completada );
  }

}
