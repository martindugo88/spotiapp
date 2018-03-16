import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class SpotifyService {
  artistas:any[] = [];
  token:string = "Bearer BQATlk4pHB_8pBoAItXicajC8Xsf7I0KhlDzmqBoThuiIMAA7cAAc65nkmfW15Ln8DU7VV2djMtKas8k4eo";

  constructor( public http : HttpClient ) {
    console.log("Servicio de spotify listo");
  }

  getArtists(termino:string){
    let url = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=20`;

    let headers = new HttpHeaders({
      'authorization' : this.token
    })

    return this.http.get(url, { headers }).map( (resp:any) => {
      this.artistas = resp.artists.items;
      return this.artistas;
    })
  }

  getArtist( id:string){
    let url = `https://api.spotify.com/v1/artists/${ id }`;

    let headers = new HttpHeaders({
      'authorization' : this.token
    })

    return this.http.get(url, { headers });

  }

  getTop( id:string ){
    let url = `https://api.spotify.com/v1/artists/${ id }/top-tracks?country=ES`;

    let headers = new HttpHeaders({
      'authorization' : this.token
    })

    return this.http.get(url, { headers })
            .map( (resp:any) => (resp.track));
  }

}
