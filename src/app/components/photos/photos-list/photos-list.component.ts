import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { PhotosService } from 'src/app/services/photos/photos.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: Photo[];

  constructor(
    private photosService: PhotosService
  ) {
    this.photos = [];
  }

  ngOnInit() {
    this.photosService.getList().subscribe(
      (data) => {
        this.photos = data;
      },
      (err) => {
        alert('Just happend something bad!!');
      }
    );
  }

  deletePhoto(id: number): void {
    this.photosService.delete(id).subscribe(
      data => {
        alert('Se eliminó la foto');
      },
      err => {
        alert('Error!!!');
      }
    );
  }

  editPhoto(photo: Photo): void {
    this.photosService.update(photo).subscribe(
      data => {
        alert('Se actualizó la foto');
      },
      err => {
        alert('Error!!!');
      }
    );
  }

  addPhoto(photo: Photo): void {
    this.photosService.add(photo).subscribe(
      data => {
        alert('Se Insertó la foto');
      },
      err => {
        alert('Error!!!');
      }
    );
  }
}
