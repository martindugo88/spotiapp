import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artista:any = [];
  songs:any[] = [];

  constructor(private activatedRoute:ActivatedRoute, private _spotify:SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe( params => {
        this._spotify.getArtist(params['id'])
            .subscribe( artist => {
              console.log(artist);
              this.artista = artist;
        });

        this._spotify.getTop(params['id'])
            .subscribe( tracks => {
              console.log(tracks);
        });

    })
  }

}
