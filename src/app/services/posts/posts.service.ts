import { Injectable } from '@angular/core';

// models
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[];

  constructor() {
    this.posts = [];
    const  p1  = new Post();
    p1.id = 1;
    p1.title = 'Hello World!';
    p1.description = 'this is a test';
    p1.image = 'https://dummyimage.com/600x400/000/fff';
    p1.createdAt = new Date();

    const  p2  = new Post();
    p2.id = 2;
    p2.title = 'Hello World2!';
    p2.description = 'this is a test 2';
    p2.image = 'https://dummyimage.com/600x400/000/fff';
    p2.createdAt = new Date();

    this.posts.push(p1);
    this.posts.push(p2);
  }

  public getList(): Post[] {
    return this.posts;
  }
}
