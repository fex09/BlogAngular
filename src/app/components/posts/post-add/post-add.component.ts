import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
// models
import { Post } from 'src/app/models/post';
import { AppComponent } from '../../main/app.component';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  // @Output() onSavePost = new EventEmitter<Post>();
  public post: Post;

  constructor(
    private myapp: AppComponent,
    private postsService: PostsService
  ) {
    this.post = new Post();
  }

  ngOnInit() {}

  public savePost(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(this.post);
    this.back();
  }

  public back(): void {
    this.myapp.pageSection = 'posts';
  }
}
