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
      'Authorization': 'Bearer BQDOPLp9cnrFJHwlI7uFDS8tTg4PRWtJt8kh-Gh7Zxof09KgRt6MrdMpEriKTxd85E1g_WVVKykapVF0DsQ'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items ));     

  }

  getArtistas( termino: string ){

    return this.getQuery(`search?query=${ termino }&type=artist&offset=0&limit=15`)
      .pipe( map( data => data['artists'].items ));

  }

  getArtista( id: string ){

    return this.getQuery(`artists/${ id }`)
      //.pipe( map( data => data['artists'].items ));

  }

  getTopTracks( id: string ){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe( map( data => data['tracks'] ));

  }

}
