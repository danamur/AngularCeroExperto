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
      'Authorization': 'Bearer BQCFJ13xn8QXzqp3Mm9rI_5H1W6f0HIs1dsrqeEZAjJpdbSHLWD2teFmQnuGk9gn_F8ooPXMpDITk8rPHnw'
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
