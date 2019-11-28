import { Component, Input} from '@angular/core';
import { Post } from 'src/app/models/post';

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

  constructor() {
  }
}
