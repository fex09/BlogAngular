import { Album } from './../../../models/album';
import { Component, OnInit } from '@angular/core';
import { AlbumserviceService } from 'src/app/services/photos/albumservice.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  public albums: Album[];

  constructor(
    private albumservice: AlbumserviceService
  ) {
    this.albums = [];
  }

  ngOnInit() {
    this.getAlbums();
  }

  public getAlbums(): void {
    this.albumservice.getList().subscribe(
      (data) => {
        this.albums = data;
      },
      (err) => {
        alert('Just happend something bad with the albums!!!');
      }
    );
  }

  deleteAlbum(id: number): void {
    this.albumservice.delete(id).subscribe(
      data => {
        alert('Se eliminó el album');
      },
      err => {
        alert('Error!!!');
      }
    );
  }

  editAlbum(album: Album): void {
    this.albumservice.update(album).subscribe(
      data => {
        alert('Se actualizó el album');
      },
      err => {
        alert('Error!!!');
      }
    );
  }
}
