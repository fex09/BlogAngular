import { Component, OnInit } from '@angular/core';
// services
import { PostsService } from 'src/app/services/posts/posts.service';
// models
import { Post } from 'src/app/models/post';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(
    private postsService: PostsService
  ) {
    this.posts = postsService.getList();
  }
  ngOnInit() {
  }
}
