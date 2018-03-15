import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino:string = '';

  constructor( private _spotify: SpotifyService) {

  }

  ngOnInit() {
  }

  buscarArtista(){

    if (this.termino.length == 0){
      return;
    }

    this._spotify.getArtists( this.termino ).subscribe( resp => {
      
    })
  }

}
