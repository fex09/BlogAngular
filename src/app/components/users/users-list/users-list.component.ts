import { Component, OnInit } from '@angular/core';
// components
import { AppComponent } from '../../main/app.component';
// services
import { PostsService } from 'src/app/services/posts/posts.service';
// models
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[];

  constructor(private userService: UsersService,
              private myapp: AppComponent) {
    this.users = userService.getUserList();
  }

  ngOnInit() {
  }

  public editUser(id: number): void {
    this.myapp.pageSection = 'edituser';
    this.userService.viewSelectedUser(id);
  }

  public deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.getList();
  }

  public getList(): void {
    this.users = this.userService.getUserList();
  }

}
