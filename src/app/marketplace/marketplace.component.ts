import { Component } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {
  public albumsArray: Album[] = Album.albums;

  constructor(private router: Router) {}


  goToAlbumDetails(selectedAlbum: Album) {
    this.router.navigate(['albums', selectedAlbum.id]);
  }
}
