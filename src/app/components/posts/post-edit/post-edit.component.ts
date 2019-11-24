import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  @Input() postInput: Post;
  selectedPost: Post;
  constructor() {
    alert('este es el seleccionado');
  }

  ngOnInit() {
  }

}
