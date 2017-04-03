import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailsComponent implements OnInit {

  albumId: number = null;
  albumToDisplay: Album;

  constructor(private route: ActivatedRoute,
            private location: Location,
            private albumService: AlbumService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    });
    this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }

}
