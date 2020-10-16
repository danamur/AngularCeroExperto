import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('Spotify Service Listo');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA6ud17B1CdruPPm2cTl7TXyy6IgS-yb6GzWmT5m1nd-Xx1ipFPTkKcR9x8jqCJddPy582Vx2iwopQrYIM'
    })

    this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers })
      .subscribe( data => {
        console.log(data);
      });

  }
}
