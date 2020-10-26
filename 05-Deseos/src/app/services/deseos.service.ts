import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  lista: Lista[] = [];

  constructor() { 

    const lista1 = new Lista('Recolectar piedras del infinito');
    const lista2 = new Lista('Heroes por desaparecer');

    this.lista.push(lista1, lista2);

  }

  crearLista( titulo: string ){

    const nuevaLista = new Lista(titulo);
    this.lista.push( nuevaLista );

  }

}
