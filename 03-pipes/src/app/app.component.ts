import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre    :  string   = 'Capitan América';
  PI        :  number   = Math.PI;
  porcentaje:  number   = 0.234;
  salario   :  number   = 1234.5;
  fecha     :  Date     = new Date();
  activar   :  boolean  = true;
  
  idioma    :  string = 'es';
  videoUrl  :  string = 'https://www.youtube.com/embed/xcvyx4UwESM';

  valorPromesa = new Promise<string> ( (resolve) => {
    
    setTimeout(() =>{
      resolve('llego la data');
    },4500);

  })

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 20
    }
  }

}
