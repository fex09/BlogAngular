import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts/posts.service';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../../main/app.component';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  public postInput: Post;

  selectedPost: Post;
  constructor(private postService: PostsService,
              private myapp: AppComponent) {
    this.postInput = this.postService.selectedPost;
  }

  ngOnInit() {
  }

  public updatePost(form: NgForm): void {
    if (form.invalid) {
      alert('Formulario inválido!');
      return;
    }
    this.postService.editPost(this.postInput);
    this.myapp.pageSection = 'posts';
  }



}
