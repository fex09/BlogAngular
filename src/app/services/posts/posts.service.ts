import { Injectable } from '@angular/core';

// models
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public posts: Post[];
  public selectedPost: Post;

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
    p2.createdAt = new Date('2019-05-02');

    this.posts.push(p1);
    this.posts.push(p2);
  }

  public getList(): Post[] {
    return this.posts;
  }

  public addPost(post: Post): void {
    this.posts.push(post);
  }

  public editPost(pPost: Post): void {
    let postedit: Post;
    postedit = this.posts.find((post: Post) => {
      return post.id === pPost.id;
    });
    postedit.description = pPost.description;
    postedit.image = pPost.image;
    postedit.title = pPost.title;
    postedit.createdAt = pPost.createdAt;
  }

  public deletePost(pId: number): Post[] {
    return this.posts.filter((post: Post) => {
      return post.id !== pId;
    });
  }

  public viewEditPost(id: number): Post {
    return this.selectedPost = this.posts.find((post: Post) => {
      return post.id === id;
    });
  }
}
