import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit {
  public albumsArray: Album[];

  constructor(private router: Router, private albumService: AlbumService) {}

  ngOnInit() {
    this.albumsArray = this.albumService.getAlbums();
  }


  goToAlbumDetails(selectedAlbum: Album) {
    this.router.navigate(['albums', selectedAlbum.id]);
  }
}
