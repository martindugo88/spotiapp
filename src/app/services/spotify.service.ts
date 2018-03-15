import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artistas:any[] = [];
  artista:any = {};

  constructor( public http : HttpClient ) {
    console.log("Servicio de spotify listo");
  }

  getArtists(termino:string){
    let url = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=20`;

    let headers = new HttpHeaders({
      'authorization' : "Bearer BQCyZGKIixvMuU5U3zhJTyX9YrZoVc9eqWmc5HB7uEm7wwHU686whI7ykbLX38U_zBpiAvrnKXR7plgeocY"
    })

    return this.http.get(url, { headers }).map( resp =>{
      this.artistas = resp.artists.items;
      return this.artistas;
    })
  }

  getArtist( id:string){
    let url = `https://api.spotify.com/v1/artists/${ id }`;

    let headers = new HttpHeaders({
      'authorization' : "Bearer BQCyZGKIixvMuU5U3zhJTyX9YrZoVc9eqWmc5HB7uEm7wwHU686whI7ykbLX38U_zBpiAvrnKXR7plgeocY"
    })

    return this.http.get(url, { headers });

  }

}
