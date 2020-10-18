import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('Spotify Service Listo');
  }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCOmbVs6xKzoriKoqPDASYIiXsrZqwy7Qk3DOxZkEaBHgCpt1Rb35yYHdwJ0IeO5RFWT3_j9gN1sabGwIE'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items ));     

  }

  getArtista( termino: string ){

    return this.getQuery(`search?query=${ termino }&type=artist&offset=0&limit=15`)
      .pipe( map( data => data['artists'].items ));

  }

}
