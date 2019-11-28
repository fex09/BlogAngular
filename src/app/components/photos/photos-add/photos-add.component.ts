import { PhotosService } from 'src/app/services/photos/photos.service';
import { NgForm } from '@angular/forms';
import { Photo } from './../../../models/photo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-add',
  templateUrl: './photos-add.component.html',
  styleUrls: ['./photos-add.component.css']
})
export class PhotosAddComponent implements OnInit {
  public photo: Photo;

  constructor(
    private photoservice: PhotosService

  ) {
    this.photo = new Photo();
  }

  ngOnInit() {
  }

  savePhoto(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.photoservice.add(this.photo).subscribe(
      data => {
        alert('Éxito!!');
      },
      err => {
        alert('Error con el servicio de fotos!!');
      }
    );

  }

}
