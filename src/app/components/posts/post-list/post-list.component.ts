import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// services
import { PostsService } from 'src/app/services/posts/posts.service';
// models
import { Post } from 'src/app/models/post';
// components
import { AppComponent } from '../../main/app.component';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];

  @Output() public setsectionOutput = new EventEmitter<string>();

  constructor(
    private postsService: PostsService,
    private myapp: AppComponent
  ) {
    this.posts = postsService.getList();
  }

  ngOnInit() {
  }

  public editPost(id: number): void {
    // this.onEditPost.emit(id);
    this.myapp.pageSection = 'editpost';
    this.postsService.viewSelectedPost(id);
  }

  public deletePost(id: number): void {
    this.postsService.deletePost(id);
    this.posts = this.postsService.getList();
  }

  public emitirSeccion(seccion: string): void {
    alert(seccion);
    this.setsectionOutput.emit(seccion);
  }


}
