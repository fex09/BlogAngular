import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

// models
import { Post } from 'src/app/models/post';
import { AppComponent } from '../../main/app.component';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  @Output() onSavePost = new EventEmitter<Post>();
  public post: Post;

  constructor(
    private myapp: AppComponent
  ) {
    this.post = new Post();
  }

  ngOnInit() {
  }

  public savePost(form: NgForm): void {
    if (form.invalid) {
      alert('Formulario inválido!');
      return;
    }
    this.onSavePost.emit(this.post);
    this.myapp.pageSection = 'posts';
  }
}
