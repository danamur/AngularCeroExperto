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

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDcFKG-MwhY7tyU5Xfj_EBFQvL8iUFMnoertY2F-BUzmVs8NlUaH1ORAQusirskiz0SmTdk2-bvRSJ_rHI'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers })
      .pipe( map( data => data['albums'].items ));

  }

  getArtista( termino: string ){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDcFKG-MwhY7tyU5Xfj_EBFQvL8iUFMnoertY2F-BUzmVs8NlUaH1ORAQusirskiz0SmTdk2-bvRSJ_rHI'
    })

    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=15`,{ headers })
      .pipe( map( data => data['artists'].items ));

  }

}
