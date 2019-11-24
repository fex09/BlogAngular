import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// models
import { User } from 'src/app/models/user';
// components
import { AppComponent } from '../../main/app.component';
// services
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {
  public user: User;

  constructor(
    private myapp: AppComponent,
    private userService: UsersService
  ) {
    this.user = new User();
  }

  ngOnInit() {
  }

  public saveUser(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.userService.addUser(this.user);
    this.back();
    console.log(this.user.firstname + ' se guardó');
  }

  public back(): void {
    this.myapp.pageSection = 'users';
  }

}
