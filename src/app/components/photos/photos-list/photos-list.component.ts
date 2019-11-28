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



}
