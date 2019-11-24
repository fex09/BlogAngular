import { Component, OnInit, RootRenderer } from '@angular/core';
// services
import { PostsService } from 'src/app/services/posts/posts.service';
// models
import { Post } from 'src/app/models/post';
import { AppComponent } from '../../main/app.component';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(
    private postsService: PostsService,
    private myapp: AppComponent
  ) {
    this.posts = postsService.getList();
  }
  ngOnInit() {
  }

  setSection(sectionName: string): void {
    this.myapp.pageSection = sectionName;
  }


}
