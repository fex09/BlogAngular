import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];
  post2: Post;
  title = 'BlogApp';
  public pageSection = 'home';
  public postSelected: Post;
  public seleccionado: number;

  constructor(public postService: PostsService) {
    this.posts = postService.posts;
  }

  public viewEditDetails(id: number): void {
    this.postSelected = this.posts.find((p: Post) => {
      return p.id === id;
    });
    this.pageSection = 'editpost';
  }
}
